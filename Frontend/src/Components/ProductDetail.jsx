import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail({ products, loading }) {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 dark:bg-gray-900 dark:text-white">
      <Link to="/">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Back to Home
        </button>
      </Link>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col items-center md:col-span-1">
          <div className="w-full">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex mt-4 space-x-4 flex-wrap justify-center">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name}-${index}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === img ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{product.description}</p>
          <div className="mt-4">
            <span className="text-2xl">Color: </span>
            <div className="flex space-x-2">
              {product.colors &&
                product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl">Available Sizes: </span>
            {product.sizes && product.sizes.join(', ')}
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">Price: </span>
            ${product.price}
          </div>
          <div className="mt-4">
            <span className="text-2xl">Stock: </span>
            {product.stock}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
