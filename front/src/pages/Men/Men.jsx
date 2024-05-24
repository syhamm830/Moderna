import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Men.css';
import Product from '../../components/Product/Product';

function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/products/category/Men')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => toast.error('Failed to fetch products'));
  }, []);

  return (
    <>
      <div className="topm">
        <p>New here? Get 20% off everything! with code: ImNew</p>
      </div>
      <div className="title-container">
        <div className="line"></div>
        <h2 className="title">MEN SECTION</h2>
        <div className="line"></div>
      </div>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product._id}
            id={product._id}
            imgSrc={product.imageUrl}
            title={product.name}
            price={product.price}
            category={product.category}
            subcategory={product.subcategory}
          />
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default Men;
