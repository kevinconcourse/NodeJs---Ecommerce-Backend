const CategoryController = require('../controllers/category_controller');
const CategoryRoutes = require('express').Router();


CategoryRoutes.post('/createCategory', CategoryController.createCategory);
CategoryRoutes.get('/', CategoryController.fetchAllCategories);
CategoryRoutes.get('/:id', CategoryController.getCategoryById);


module.exports = CategoryRoutes;