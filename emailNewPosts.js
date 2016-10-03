var fs = require('fs');
var path = require('path');
var async = require('async');
var parseFrontMatter = require('hexo-front-matter').parse;
var moment = require('moment');
var wrap80 = require('wordwrap')(80);
var yaml = require('js-yaml');

var configFile = fs.readFileSync('./_config.yml', 'utf8');
var config = yaml.safeLoad(configFile).server;
var smtpTransport = require('./smtpTransport');

var postsDirectory = path.join(process.cwd(), 'source/_posts');
var emailLogFilename = path.join(process.cwd(), 'email_update_log');
var mailingListFilename = path.join(process.cwd(), 'mailing_list');

function readFileAsString (filename, callback) {
  fs.readFile(filename, function (err, buffer) {
    if (err) {
      return callback(err);
    }
    callback(null, buffer.toString());
  });
}

function readFileAsArray (filename, callback) {
  readFileAsString(filename, function (err, contents) {
    if (err) {
      return callback(err);
    }
    callback(null, contents.split('\n'));
  });
}

function writeArrayToFile (filename, array, callback) {
  fs.writeFile(filename, array.join('\n'), callback);
}

function sendEmail (emailData, address, callback) {
  var mailOptions = {
    from: emailData.senderName + ' <' + config.email.auth.user + '>',
    to: address,
    subject: '[' + config.mailsubject + '] ' + emailData.subject,
    text: emailData.body
  };
  smtpTransport.sendMail(mailOptions, function (err) {
    if (err) {
      console.error(err);
      console.error('Unable to send email "' + emailData.subject + '" to recipient: ' + address);
    }
    callback(err);
  });
}

function sendEmails (addresses, emailData, callback) {
  async.each(addresses, sendEmail.bind(null, emailData), function (err) {
    if (err) {
      console.error('Failed to send email "' + emailData.subject + '" to some recipients.');
    } else {
      console.log('Email update for "' + emailData.subject + '" succeeded.');
    }
    callback(err);
  });
}

function getEmailBody (postData) {
  var title = postData.frontMatter.title;
  var date = new Date(postData.frontMatter.date);
  var author = postData.frontMatter.author;
  var tags = (postData.frontMatter.tags || []).map(function (tag) {
    return '#' + tag;
  }).join(', ');
  var plainTextContents = (
    postData.contents
      .split(/<[\w\W]+>/).join('') // strip html
      .split(/!\[[\w\W]*\]\([\w\W]*\)/).join('') // strip images
  );
  var directory = moment(date).format('YYYY/MM/DD');
  var permalink = config.siteroot + '/' + path.join(directory, postData.slug);
  return wrap80(
    title + '\n' +
    moment(date).format('DD/MM/YYYY') + '\n' +
    'tags: ' + tags + '\n' +
    'posted by ' + author + '\n' +
    '\n' +
    'See full post at: ' + permalink + '\n' +
    '\n' +
    plainTextContents
  );
}

function bail (err, callback) {
  console.error('Unable to complete email update for new posts:');
  if (typeof callback === 'function') {
    callback(err);
  } else {
    console.error(err);
  }
}

function emailNewPosts (callback) {
  console.log('Sending email update(s) for any new posts...');
  readFileAsArray(mailingListFilename, function (err, addresses) {
    if (err) {
      return bail('Unable to read file: ' + mailingListFilename, callback);
    }
    var realAddresses = addresses.map(function (a) {
      return a.trim();
    }).filter(function (a) {
      // barebones email address validation
      return /^.+@.+$/.test(a);
    });
    readFileAsArray(emailLogFilename, function (err, log) {
      if (err) {
        return bail('Unable to read file: ' + emailLogFilename, callback);
      }
      // if date doesn't exist, choose beginning of (unix) time
      var lastUpdated = new Date(log[0] || 0);
      fs.readdir(postsDirectory, function (err, filenames) {
        if (err) {
          return bail('Unable to read directory ' + postsDirectory, callback);
        }
        var lastCheckedDirectory = new Date();
        var postFilenames = filenames.filter(function (filename) {
          return filename.indexOf('.md') !== -1;
        }).map(function (filename) {
          return path.join(postsDirectory, filename);
        });
        async.map(postFilenames, readFileAsString, function (err, posts) {
          if (err) {
            return bail('Unable to read files in directory: ' + postsDirectory, callback);
          }
          var emailDataList = posts.map(function (post, index) {
            return {
              // cut out front matter and surrounding whitespace
              contents: post.replace(/---[\w\W]*---/, '').trim(),
              frontMatter: parseFrontMatter(post),
              // get filename without parent directory and without '.md'
              slug: postFilenames[index].split('/').slice(-1)[0].slice(0, -3)
            };
          }).filter(function (postData) {
            var date = postData.frontMatter.date;
            return new Date(date) > lastUpdated;
          }).map(function (postData) {
            return {
              subject: postData.frontMatter.title,
              body: getEmailBody(postData),
              senderName: postData.frontMatter.author
            };
          });
          async.each(emailDataList, sendEmails.bind(null, realAddresses), function (err) {
            if (err) {
              console.error('Failed to send some emails.');
            } else if (emailDataList.length) {
              console.log('Email update(s) successfully sent to ' + realAddresses.length + ' recipients.');
            } else {
              console.log('No email updates were necessary.');
            }
            var updatedEmailLog = [lastCheckedDirectory.toISOString()].concat(log);
            writeArrayToFile(emailLogFilename, updatedEmailLog, function (err) {
              if (err) {
                return bail('Unable to update email log after send.', callback);
              }
              if (typeof callback === 'function') {
                callback();
              }
            });
          });
        });
      });
    });
  });
}

module.exports = emailNewPosts;
