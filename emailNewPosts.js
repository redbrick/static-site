var fs = require('fs');
var path = require('path');
var async = require('async');
var parseFrontMatter = require('hexo-front-matter').parse;

var config = require('./config.json');
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
    from: 'Redbrick <' + config.email.auth.user + '>',
    to: address,
    subject: emailData.subject,
    html: emailData.body // TODO: add plain text alternative
  };
  smtpTransport.sendMail(mailOptions, function (err) {
    if (err) {
      console.error(err);
      console.error('Unable to send email "' + emailData.subject + '" to recipient: ' + address);
    }
    callback(err);
  });
}

function sendEmails (emailData, callback) {
  readFileAsArray(mailingListFilename, function (err, addresses) {
    if (err) {
      console.error('Failed to open mailing list.');
      return callback(err);
    }
    async.each(addresses, sendEmail.bind(null, emailData), function (err) {
      if (err) {
        console.error('Failed to send email "' + emailData.subject + '" to some recipients.');
      }
      callback(err);
    });
  });
}

function getEmailBody (postData) {
  return postData.contents;
}

function emailNewPosts (callback) {
  try {
    readFileAsArray(emailLogFilename, function (err, log) {
      if (err) {
        console.error('Unable to read file: ' + emailLogFilename);
        throw err;
      }
      // if date doesn't exist, choose beginning of (unix) time
      var lastUpdated = new Date(log[0] || 0);
      fs.readdir(postsDirectory, function (err, filenames) {
        var lastCheckedDirectory = new Date();
        if (err) {
          console.error('Unable to read directory ' + postsDirectory);
          throw err;
        }
        var postFilenames = filenames.filter(function (filename) {
          return filename.indexOf('.md') !== -1;
        }).map(function (filename) {
          return path.join(postsDirectory, filename);
        });
        async.map(postFilenames, readFileAsString, function (err, posts) {
          if (err) {
            console.error('Unable to read files in directory: ' + postsDirectory);
            throw err;
          }
          var postsData = posts.map(function (post) {
            return {
              contents: post,
              frontMatter: parseFrontMatter(post)
            };
          }).filter(function (postData) {
            var date = postData.frontMatter.date;
            return new Date(date) > lastUpdated;
          });
          var emailDataList = postsData.map(function (postData) {
            return {
              subject: postData.frontMatter.title,
              body: getEmailBody(postData)
            };
          });
          async.each(emailDataList, sendEmails, function (err) {
            if (err) {
              console.error('Failed to send some emails.');
            } else {
              console.log('Email update successful.');
            }
            var updatedEmailLog = [lastCheckedDirectory.toISOString()].concat(log);
            writeArrayToFile(emailLogFilename, updatedEmailLog, function (err) {
              if (err) {
                console.error('Unable to update email log after send.');
                throw err;
              }
              callback();
            });
          });
        });
      });
    });
  } catch (err) {
    console.error('Unable to complete email update for new posts:');
    if (typeof callback === 'function') {
      callback(err);
    } else {
      console.error(err);
    }
  }
}

module.exports = emailNewPosts;
