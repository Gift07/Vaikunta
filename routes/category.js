const { getAllCategories, createCategory } = require("../controllers/category");

const router = require("express").Router();

router.post("/create", createCategory);
router.get("/all", getAllCategories);

module.exports = router;
