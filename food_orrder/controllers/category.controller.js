const categoryModel = require("../models/category.model")
// CRUD
module.export = {
    createCategory: async (req, res) => {
        const body = req.body;
        const newCategory = await categoryModel.create(body);
        return res.status(201).json(newCategory);
    },
    getCategories: async (req, res) => {
        const categories = await categoryModel.find();
        return res.status(200).json(updatedCategory);
    },
    deleteCategory: async(req, res) => {
        const id = req.params.id;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        return res.status(200).json(deletedCategory);
    }
}