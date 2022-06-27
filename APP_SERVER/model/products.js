    var mongoose = require("mongoose");

    const productsSchema = new mongoose.Schema({
        title: 
        {
            type: String,
            required: true
        },
        description: String,
        price: Number,
        imagePath: String,
        isSelected: Boolean
    });

    var productsModel = mongoose.model("product", productsSchema, "product");

    module.exports = { productsModel } ;

