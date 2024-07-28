const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');
const app = express();

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = {router};
