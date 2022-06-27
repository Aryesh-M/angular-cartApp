var mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: Array,
    isAdmin: {
        default: false,
        type: Boolean
    }, 
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
}); 

var usersModel = mongoose.model("user", usersSchema, "user");

module.exports = { usersModel } ;

