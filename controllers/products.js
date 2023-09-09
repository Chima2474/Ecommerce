const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { feature, company, name, sort, field } = req.query;

  const queryObj = {};

  if (feature) {
    queryObj.feature = feature === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObj);

  if (sort) {
    const sortedList = sort.split(",").join(" ");
    result = result.sort(sortedList);
  }

  if (field) {
    const fieldList = field.split(",").join(" ");
    result = result.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  result = result.skip((page - 1) * limit).limit(limit);
  const products = await result;

  res.status(200).json({ count: products.length, products });
};

const getSingleProduct = async (req, res) => {
  res.send("singleproduct");
};

const createProduct = async (req, res) => {
  res.send("create product");
};

const updateProduct = async (req, res) => {
  res.send("update product");
};

const deleteProduct = async (req, res) => {
  res.send("delete product");
};

module.exports = {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
