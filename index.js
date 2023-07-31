const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("node:path");
require("dotenv").config();

// importing routes
const CategroryRoutes = require("./routes/category");
const ProductRoutes = require("./routes/product");

app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(), express.json());

// setting upimage viewer middleware
app.use("/public", express.static(path.join(path.resolve(), "/public")));

// index url
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "API is working correctly. ✅✅ ",
  });
});

// routes initialized
app.use("/api/v1/category", CategroryRoutes);
app.use("/api/v1/products", ProductRoutes);

// connection to mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server running on port 5000...`);
    });
  })
  .catch((error) => console.log(error));
