const router = require('express').Router();
const imageUploader = require('../utils/imageUploader');

const { isAuthenticated } = require('../middleware/isAuthenticated');

//router.use(isAuthenticated);
router.post('/images/upload', imageUploader.single('dog'), (req, res) => {
  console.log(req.file, req.files);
  res.json(req.file);
});

module.exports = router;
