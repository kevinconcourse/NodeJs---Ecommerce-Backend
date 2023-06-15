const OrderModel = require("../models/order_model");

const OrderController = {
  createOrder: async function (req, res) {
    try {
      const { user, items } = req.body;
      const newOrder = new OrderModel({
        user: user,
        items: items,
      });

      newOrder.save();

      return res.json({
        success: true,
        data: newOrder,
        message: "Order Placed",
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },

  removeFromOrder: async function (req, res) {
    try {
      const { user, product } = req.body;

      const updatedOrder = await OrderModel.findOneAndUpdate(
        {
          user: user,
        },
        {
          $pull: {
            items: {
              product: product,
            },
          },
        },
        {
          new: true,
        }
      );

      return res.json({
        success: true,
        data: updatedOrder,
        message: "Removed from cart successfully",
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },

  getOrderForUser: async function (req, res) {
    try {
      const userId = req.params.userId;
      const foundOrder = await OrderModel.find({ "user.id": userId });

      if (!foundOrder) {
        return res.json({ success: true, data: [] });
      }

      return res.json({ success: true, data: foundOrder });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },

  updateOrderStatus: async function (req, res) {
    try {
      const { orderId, status } = req.body;
      const updatedOrder = await OrderModel.findOneAndUpdate(
        {
            _id: orderId,

        },
        {
            status: status,
        },
        {
            new: true,
        }
      );
      
      return res.json({ success: true, data: updatedOrder });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
};

module.exports = OrderController;
