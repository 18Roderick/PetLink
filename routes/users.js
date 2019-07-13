const router = require('express').Router();
const imageUploader = require('../utils/imageUploader');

const { isAuthenticated } = require('../middleware/isAuthenticated');

// router.use(isAuthenticated);
router.post('/images/upload', imageUploader.single('dog'), (req, res) => {
  const files = {
    fieldname: 'dog',
    originalname: 'thumb-1920-564835.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'C:\\Users\\rode_\\Documents\\desarrollo\\PetLink\\imageServer',
    filename: 'f9af44b5-a52f-4242-b32a-93ae5ceb2481.jpg',
    path: 'C:\\Users\\rode_\\Documents\\desarrollo\\PetLink\\imageServer\\f9af44b5-a52f-4242-b32a-93ae5ceb2481.jpg',
    size: 382243
  }
  const newImage = {
    
  }
  console.log(req.file, req.files);
  res.json(req.file);
});

module.exports = router;
