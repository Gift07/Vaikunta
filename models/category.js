const mongoose = require("mongoose");

const category_schema = mongoose.Schema({
  category_title: { type: String, required: true },
  total_number_products: { type: Number, default: 0 },
});

module.exports = mongoose.model("category_model", category_schema);
