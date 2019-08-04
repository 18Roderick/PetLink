const express = require('express');

const router = express.Router();

router.use((req, res) => {
  res.status(404).json({
    message: `page not found ${req.protocol}://${req.hostname}${req.url}`
  });
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err });
});

module.exports = router;
