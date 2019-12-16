const router = require('express').Router();

router.use('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

module.exports = router;
