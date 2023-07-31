const {
  createProduct,
  getAllProducts,
  getCategoryProducts,
  getProductId,
} = require("../controllers/product");
const imageUploadingMiddleware = require("../middleware/upload");

const router = require("express").Router();

router.post("/create", imageUploadingMiddleware, createProduct);
router.get("/all", getAllProducts);
router.get("/all/:category_id", getCategoryProducts);
router.get("/:id", getProductId);

module.exports = router;
