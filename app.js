const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {
  getProducts,
  createProduct,
} = require("./controllers/productController");

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://p4fAyfgCTlLEkAe2:fBNcuR3nXGZIl4hk@cluster0.pjp9hht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => res.send("Welcome to the API"));
// app.use("/api", productRoutes);
app.use("/products", getProducts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
