const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: [true,"Title cannot be empty!"]
    },
    "price": {
        type: Number,
        required: [true,"Price cannot be empty!"],
        min: [1,"Product can't be free or have negative price"]
    },
    "description": {
        type: String,
        minlength: [3,"Your description is too short! Please me more info"]
    }
},{timestamps: true});
const Product = mongoose.model("product",ProductSchema);

module.exports = Product;