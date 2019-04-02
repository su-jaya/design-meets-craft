const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

// Cloudinary
cloudinary.config({
  cloud_name: "dfksfwvex",
  api_key: "895592379247953",
  api_secret: "919kVCCE0MbdHG70j7GBRdqjfTI"
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: "thing-gallery",
  allowedFormats: ["jpg", "png"],
  filename: function(req, res, cb) {
    cb(null, res.originalname);
  }
});

const uploader = multer({ storage });
module.exports = uploader;
