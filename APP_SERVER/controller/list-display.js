const mongoose = require('mongoose');
var myProducts = require('../model/products');

var sendJSONresponse = function(res, status, content) {
    res.status(status).json(content);
};

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderProductHomepage = function(req, res, responseBody) {
  res.render('list-display', {
      products:responseBody
  });
};



const myProductsList = function(req, res){
    myProducts.productsModel.find().exec(function(err, productsdata){
        if (err)
        {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(productsdata);
    });
//   const path = '/api/products';
//   const requestOptions = {
//       url : apiOptions.server + path,
//       method : 'GET',
//       json : {}
//   };
//   request(
//       requestOptions,
//       (err, response, body) => {
//         _renderProductHomepage(req, res, body);
//       }      
//   );
};

const _renderProductsDetailPage = function(req, res, responseBody)
{
    res.render('display', {               
        myccProducts:responseBody        
    });
  
};

const productsInfo = function (req, res){

    // const path = `/api/products/${req.params.productsid}`;
    // const requestOptions = {
    //     url : apiOptions.server + path,
    //     method : 'GET',
    //     json : {}
    // };

    // request(
    //     requestOptions,
    //     (err, response, body) => {
    //       _renderProductsDetailPage(req, res, body);
    //     }
    // );
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

const _renderCreatePage = function(req, res) {
    res.render('create-products',{
        title:"Create New Products"
    });
};

const addNewProducts = function(req, res){
    _renderCreatePage(req, res);
};

const doAddNewProducts = function(req, res){
    const path = '/api/products';
    
    const data = JSON.parse(JSON.stringify(req.body));
    const postdata = {
        title: data.title,
        rating: data.rating,
        description: data.description,  
        price: data.price,
        publishDate : data.publishDate
    };

    const requestOptions = {
        url:apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    // request(
    //     requestOptions,
    //     (err, response, body) => {
    //         if(response.statusCode === 201){
    //             res.redirect('/list-display');
    //         }
    //     }
    // );
    myProducts.productsModel.create({
        title: postdata.title,
        description: postdata.description,
        price: postdata.price,
    }, (err, productsdata) =>{
        if(err){
            res.status(400).json(err);
        }else{
            res.status(201).json(productsdata);
        }
    });
};

const editProducts = function (req, res) {

    var requestOption, path;

    var path = '/api/products/' + req.params.productsid;

    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    // request(requestOption, function(err, response, body) {

    //     res.render('updateproduct', { 
    //         title: 'Update', 
    //         mProducts: responseBody,
    //     }); 
    // });
    myProducts.productsModel.findById(req.params.productsid)
    .exec((err, productsdata) => {
        if (!productsdata) {
            return res.status(404).json({"message" : "product id not found"});
        } else if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(productsdata);
    });
}

const doEditProducts = function(req,res) {
    const path = '/api/products/' + req.params.productsid;
    const postdata = {
        
        title: req.body.title,
        rating: req.body.rating,
        price: req.body.price,
        publishDate : req.body.publishDate
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'PUT',
        json: postdata
    }
    // request(
    //     requestOptions,
    //     (err, response, body) => {
    //         if(response.statusCode === 200) {
    //             res.redirect('/products');
    //         }
    //     }
    // );
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
        products.title= req.body.title? req.body.title : products.title;
        products.description = req.body.description ? req.body.description: products.description;
        products.price= req.body.price ? req.body.price : products.price;

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
}
module.exports = { myProductsList , productsInfo, doAddNewProducts, addNewProducts, editProducts, doEditProducts,  deleteProduct};