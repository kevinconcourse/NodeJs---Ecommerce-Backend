const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/user_routes');
const CategoryRoutes = require('./routes/category_routes');
const ProductRoutes = require('./routes/product_routes');
const CartRoutes = require('./routes/cart_routes');
const OrderRoutes = require('./routes/order_routes');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());


mongoose.connect("mongodb+srv://kevinconcourse:test1234@cluster0.kbkrh7s.mongodb.net/ecommerce?retryWrites=true&w=majority");

app.use("/api/user", UserRoutes);
app.use("/api/categories", CategoryRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/order", OrderRoutes);

const port  = 3000;
app.listen(port, ()=> console.log(`Server Started at PORT : ${port}`));

