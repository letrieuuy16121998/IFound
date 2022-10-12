const categoryModel = require('../models/CategoryModel')

exports.getCategories = async() => {
    const categories = await categoryModel.find();
    return categories;
}