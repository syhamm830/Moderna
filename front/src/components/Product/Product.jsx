import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ id, imgSrc, title, price }) {
  return (
    <div className="product">
      <Link to={`/Description/${id}`}>
        <img src={imgSrc} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
        <p className="product-price">{price} dt</p>
      </Link>
    </div>
  );
}

export default Product;
