
const productModel = require('../models/ProductModel')

exports.getProducts = async() => {
    const products = await productModel.find();
}