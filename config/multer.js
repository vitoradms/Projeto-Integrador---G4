const multer = require('multer');
const { v4 } = require('uuid');

const uploadPath = 'public/uploads';

module.exports = {
  uploadPath,

  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, uploadPath);
    },

    filename: (request, file, callback) => {
      callback(null, `${ v4() } - ${ file.originalname }`);
    }
  }),
}