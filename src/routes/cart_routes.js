const CartController = require('../controllers/cart_controller');
const  CartRoutes = require('express').Router();



CartRoutes.get('/:user', CartController.getCartForUser);
CartRoutes.post('/addToCart', CartController.addToCart);
CartRoutes.delete('/delete', CartController.removeFromCart);


module.exports = CartRoutes;
