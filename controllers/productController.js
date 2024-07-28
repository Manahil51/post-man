const Product = require("../middleware/models/product");

const getProducts = async (req, res) => {
  const user = await ProductActivation.find();
  res.send(products);
};

const createProduct = async (req, res) => {
  const user = new products({
    productNam: "First name 2",
    description: "last name 2",
    price: "email@gmail.com",
    details: "123456789",
  });
  const Product = await User.Product(Product);
  res.send(Products);
};

module.exports = { getProducts, createProduct };
