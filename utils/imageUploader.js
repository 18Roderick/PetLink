const path = require('path');
const multer = require('multer');
const uuid = require('uuid/v4');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../imageServer'));
  },
  filename: (req, file, cb) => {
    cb(null, `${uuid()}.${file.originalname.split('.')[1]}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
