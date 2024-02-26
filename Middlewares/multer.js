const multer = require("multer");
const path = require("path");

//1- storage
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.join(__dirname, "Images"));
  },
  filename: (request, file, cb) => {
    cb(
      null,
      new Date().toLocaleDateString().replace(/\//g, "-") +
        "-" +
        file.originalname
    );
  },
});
//2- fileFilter
const fileFilter = (request, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  )
    cb(null, true);
  else cb(null, false);
};

module.exports = multer({ storage, fileFilter });
