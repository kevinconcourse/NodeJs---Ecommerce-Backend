const ProductController = require('../controllers/product_controller');
const ProductRoutes = require('express').Router();

ProductRoutes.post('/createProduct', ProductController.createProduct);
ProductRoutes.get('/', ProductController.fetchAllProducts);
ProductRoutes.get('/:id', ProductController.getProductById);
ProductRoutes.get('/category/:id', ProductController.getProductByCategoryId)


module.exports = ProductRoutes;