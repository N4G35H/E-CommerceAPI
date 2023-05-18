const { response } = require('express');
const Product =require('../models/product');

//function to show all the products
module.exports.products =function(req, res){
    return res.end('send')
    Product.find({},function(err, foundProducts){

        if(err){
            res.send(err);

        }else{
            res.send(foundProducts);
        }
    });
}

//function to create a new product
module.exports.create=async function(req, res){
    await  Product.create({
        name:req.body.name,
        quantity: req.body.quantity
    })
    res.json(200,{name:"Sucess"})


    
}

//function to delete a product using its ID

module.exports.delete=function(req, res){
    Product.deleteOne(
        {_id: req.params.productID},
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send({
                    message: "product deleted"
                });
            }
        });
    
}

//function to update a product

module.exports.updateQuantity = function(req, res){
    const ID = req.params.productID;
    //find the product using ID
    Product.findById(ID,function(err, found){
        if(err){
            res.send(err);
        }else{
            message: "product found"
        }
    });
}