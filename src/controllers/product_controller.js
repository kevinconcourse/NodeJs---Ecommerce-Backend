const ProductModel = require("../models/product_model");

const ProductController = {
  createProduct: async function (req, res) {
    try {
      const data = req.body;
      const newProduct = new ProductModel(data);
      await newProduct.save();

      return res.json({
        success: true,
        data: newProduct,
        message: "Product created successfully",
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },

  fetchAllProducts: async function (req, res) {
    try {
      const products = await ProductModel.find();

      return res.json({
        success: true,
        data: products,
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },

  getProductById: async function (req, res) {
    try {
      const id = req.params.id;
      const product = await ProductModel.findById(id);

      if (!product) {
        return res.json({ success: false, message: "Product not found!" });
      }

      return res.json({
        success: true,
        data: product,
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },
  getProductByCategoryId: async function (req, res) {
    try {
      const categoryId = req.params.id;
      const product = await ProductModel.find({category:categoryId});

      if (!product) {
        return res.json({ success: false, message: "Product not found!" });
      }

      return res.json({
        success: true,
        data: product,
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },
};

module.exports = ProductController;
