const multer = require("multer");
const path = require("node:path");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "public", // specify the folder where files should be saved
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    // customize the file name (optional)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    req.filename = `${file.fieldname}-${uniqueSuffix}${fileExtension}`;
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

// Middleware function to handle file uploads
const fileUploadMiddleware = (req, res, next) => {
  upload.single("product_image")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      // You can handle the error here.
      return res.status(400).json({ error: "File upload error." });
    } else if (err) {
      // An unknown error occurred when uploading.
      // You can handle the error here.
      return res.status(500).json({ error: "Server error." });
    }
    // No error occurred, proceed to the next middleware or route handler.
    next();
  });
};

module.exports = fileUploadMiddleware;
