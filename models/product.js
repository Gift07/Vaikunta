const mongoose = require("mongoose");

const product_schema = mongoose.Schema(
  {
    product_title: { type: String, required: true },
    product_image: { type: String, required: true },
    product_price: { type: Number, required: true, default: 0 },
    quantity_in_stock: { type: Number, default: 0 },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category_model",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product_model", product_schema);
