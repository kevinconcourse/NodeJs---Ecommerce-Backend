const OrderController = require('../controllers/order_controller');

const  OrderRoutes = require('express').Router();

OrderRoutes.post('/createOrder', OrderController.createOrder);
OrderRoutes.get('/getOrder/:userId', OrderController.getOrderForUser);
OrderRoutes.put('/changeOrderStatus', OrderController.updateOrderStatus);


module.exports = OrderRoutes;
