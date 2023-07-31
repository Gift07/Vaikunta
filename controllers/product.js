const product_model = require("../models/product");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res) => {
  const port = process.env.PORT || 3000;
  try {
    const host = req.headers.host;
    const protocol = req.protocol;

    // Create the full image path with the host information
    const fullImagePath = `${protocol}://${host}/public/${req.filename}`;
    console.log(fullImagePath);
    const product = new product_model({
      product_title: "my product",
      product_image: fullImagePath,
      category: "64c576990160636fdb44c175",
    });
    await product.save();
    res.status(201).json({ message: "created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await product_model.find();

  res.status(200).json(products);
});

const getProductId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await product_model.findById(id);
  res.status(200).json(product);
});

const getCategoryProducts = asyncHandler(async (req, res) => {
  const { category_id } = req.params;

  const products = await product_model
    .find({ category: category_id })
    .populate("category");

  res.status(200).json(products);
});

module.exports = {
  createProduct,
  getAllProducts,
  getCategoryProducts,
  getProductId,
};
