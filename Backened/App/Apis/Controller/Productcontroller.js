const Product = require('../Model/ProductModel');

// @desc Get all products
// @route GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// @desc Get a product by ID
// @route GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// @desc Create a product
// // @route POST /api/products
// exports.createProduct = async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     const product = await newProduct.save();
//     res.json(product);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// };

// // @desc Update a product by ID
// // @route PUT /api/products/:id
// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!product) return res.status(404).json({ msg: 'Product not found' });
//     res.json(product);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// };

// // @desc Delete a product by ID
// // @route DELETE /api/products/:id
// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) return res.status(404).json({ msg: 'Product not found' });
//     res.json({ msg: 'Product deleted' });
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// };
