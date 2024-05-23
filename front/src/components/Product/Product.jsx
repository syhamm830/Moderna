import React from 'react';
import './Product.css';

function Product({ imgSrc, title, price }) {
  return (
    <div className="product">
      <img src={imgSrc} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}dt</p>
    </div>
  );
}

export default Product;
