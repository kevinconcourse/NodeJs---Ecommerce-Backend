const CategoryModel = require("../models/category_model");

const CategoryController = {
  createCategory: async function (req, res) {
    try {
      const categoryData = req.body;
      const newCategory = new CategoryModel(categoryData);
      await newCategory.save();

      return res.json({
        success: true,
        data: newCategory,
        message: "Category created successfully",
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },

  fetchAllCategories: async function (req, res) {
    try {
      const categories = await CategoryModel.find();

      return res.json({
        success: true,
        data: categories,
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },

  getCategoryById: async function (req, res) {
    try {
      const id = req.params.id;
      const category = await CategoryModel.findById(id);

      if (!category) {
        return res.json({ success: false, message: "Category not found!" });
      }

      return res.json({
        success: true,
        data: category,
      });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  },
};

module.exports = CategoryController;
