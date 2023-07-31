const category_model = require("../models/category");
const asyncHandler = require("express-async-handler");

const createCategory = asyncHandler(async (req, res) => {
  try {
    var category = new category_model(req.body);
    await category.save();

    res.status(201).json({ message: "created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await category_model.find();

  res.status(200).json(categories);
});

module.exports = { createCategory, getAllCategories };
