
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: String,
        quantity: Number
       
    },
    { 
        versionKey: false
    });

    //creatinng a new model called product

    const Product = mongoose.model('Product',productSchema);

    module.exports=Product;