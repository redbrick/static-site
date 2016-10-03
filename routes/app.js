var express = require('express');

var router = express.Router();


// dynamically create contact page
router.get('about/contact/*', function (req, res) {
  var options = {
    root: path.join(__dirname, '/public/'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var fileName = 'about/contact/contact.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

module.exports = router;
