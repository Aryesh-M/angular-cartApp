var express = require('express');
var router = express.Router();

const about = require('../controller/about');
const allProducts = require('../controller/list-display');
const products = require('../controller/main');


router.get('/', products.main);

router.get('/about', about.about);

router.get('/list-display', allProducts.myProductsList);

router.get('/products/:productsid', allProducts.productsInfo);

router.get('/products/:productsid', allProducts.editProducts);

router.put('/products/:productsid', allProducts.doEditProducts);

router.delete('/products/:productsid', allProducts.deleteProduct);

router.route('/create-products')
        .get(allProducts.addNewProducts)
        .post(allProducts.doAddNewProducts);

module.exports = router;
