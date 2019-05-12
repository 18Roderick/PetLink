const express = require('express');

const router = express.Router();

router.get('admin', (req, res) => {
  res.send('sitio de administrador');
});

module.exports = router;
