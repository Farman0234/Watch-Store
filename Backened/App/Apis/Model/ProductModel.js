const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  colors: { type: [String], required: true },
  sizes: { type: [String], required: true },
  images: { type: [String], required: true },
  stock: { type: Number, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
