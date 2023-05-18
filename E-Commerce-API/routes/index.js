const express= require('express');
const router = express.Router();

const productController = require('../controller/products_controller');

router.get('/',productController.products);

router.post('/products',productController.create);

router.delete('/:productID',productController.delete);

router.post('/:productID/update_quantity',productController.updateQuantity);

module.exports=router;