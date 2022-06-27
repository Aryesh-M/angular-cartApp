const express = require('express');
const router = express.Router();
const product = require('../controllers/product'); 

router.get('/products', product.getProducts);
router.post('/products', product.createProduct);
router.get('/products/:productsid', product.getSingleProduct);
router.put('/products/:productsid', product.updateProduct);
router.delete('/products/:productsid', product.deleteProduct);

module.exports = router;