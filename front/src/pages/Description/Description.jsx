import React from 'react';
import { useParams } from 'react-router-dom';
import './Description.css';
import product1 from '../Women/product1.jpg';
import product2 from '../Women/product2.jpg';
import product3 from '../Women/product3.jpg';
import product4 from '../Women/product4.jpg';
import product11 from '../Men/product11.jpg';
import product22 from '../Men/product22.jpg';
import product33 from '../Men/product33.png';
import product44 from '../Men/product44.jpg';

const products = [
  { id: 1, imgSrc: product1, title: 'Sunscreen ISDIN  SPF 50', price: 78.9, description: 'Description for Sunscreen ISDIN SPF 50', category: 'women' },
  { id: 2, imgSrc: product2, title: 'Mascara lash princess', price: 14.9, description: 'Description for Mascara lash princess', category: 'women' },
  { id: 3, imgSrc: product3, title: 'Extreme Plumping Lip Filler', price: 14.9, description: 'Description for Extreme Plumping Lip Filler', category: 'women' },
  { id: 4, imgSrc: product4, title: 'REVOLUTION PALETTE', price: 24.9, description: 'Description for REVOLUTION PALETTE', category: 'women' },
  { id: 5, imgSrc: product11, title: 'Moisture Essence', price: 78.9, description: 'Description for Moisture Essence', category: 'men' },
  { id: 6, imgSrc: product22, title: 'ALL DAY PERFECT', price: 50.9, description: 'Description for ALL DAY PERFECT', category: 'men' },
  { id: 7, imgSrc: product33, title: 'Refillable Moisturizer', price: 69.9, description: 'Description for Refillable Moisturizer', category: 'men' },
  { id: 8, imgSrc: product44, title: 'Valentino Fragrance', price: 292.9, description: 'Description for Valentino Fragrance', category: 'men' }
];

function Description() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const categoryClass = product.category === 'men' ? 'men' : 'women';

  return (
    <>
      <div className="topm">
        <p>New here? Get 20% off everything! with code : ImNew</p>
      </div>
      <div className={`description-container ${categoryClass}`}>
        <div className="description-image-container">
          <img src={product.imgSrc} alt={product.title} className="description-image" />
        </div>
        <div className="description-details">
          <h1 className="description-title">{product.title}</h1>
          <p className="description-price">{product.price} dt</p>
          <p className="description-text">{product.description}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Description;
