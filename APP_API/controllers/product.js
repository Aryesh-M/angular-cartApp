const mongoose = require('mongoose');
var myProducts = require('../../APP_SERVER/model/products');

var sendJSONresponse = function(res, status, content) {
    res.status(status).json(content);
};

const getProducts = function (req, res) {
        myProducts.productsModel.find().exec(function(err, productsdata){
        if (err)
        {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(productsdata);
    });
};
const createProduct = function (req, res) {
    myProducts.productsModel.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    }, (err, productsdata) =>{
        if(err){
            res.status(400).json(err);
        }else{
            res.status(201).json(productsdata);
        }
    });
};


const getSingleProduct = function (req, res) {
    myProducts.productsModel.findById(req.params.productsid)
    .exec((err, productsdata) => {
        if (!productsdata) {
            return res.status(404).json({"message" : "product id not found"});
        } else if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(productsdata);
    });

};
const updateProduct = function (req, res) {    
    if(!req.params.productsid){
        sendJSONresponse(res, 400, { "message": "product id is required" });
        return;
    }
    myProducts.productsModel.findById(req.params.productsid).exec(function(err, products){
        if(err){
            sendJSONresponse(res, 500, err);
            return;
        }
        if (!products) {
            sendJSONresponse(res, 404, { "message": "product not found" });
            return;
        }
        products.title= req.body.title
        products.description = req.body.description;
        products.price= req.body.price;

        products.save(function(err, products){
            if (err) {
                sendJSONresponse(res, 500, err);
            } else {
                sendJSONresponse(res, 200, products);
            }
        });
    });    
};

const deleteProduct = function (req, res) {   
    const productsid = req.params.productsid;
    if(productsid){
        myProducts.productsModel.
        findByIdAndRemove(productsid)
        .exec((err, productsdata) =>{
            if(err){
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    }else{
        res.status(404).json({"message" : "No Product id"});
    }
};

module.exports = {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}