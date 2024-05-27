import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Shopping.css';
import Product from '../../components/Product/Product';
import Sidebar from './Sidebar';

const Shopping = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async (subcategory = '') => {
    try {
      let url = `http://localhost:8001/products/category/${category}`;
      if (subcategory) {
        url += `?subcategory=${subcategory}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        toast.error('Failed to fetch products: Invalid response format');
      }
    } catch (error) {
      toast.error('Failed to fetch products');
    }
  };

  return (
    <div className="shopping-page">
      <Sidebar category={category} onFilter={fetchProducts} />
      <div className="shopping-content">
        <div className="topm">
          <p>New here? Get 20% off everything! with code: ImNew</p>
        </div>
        <div className="title-container">
          <div className="line"></div>
          <h2 className="title">{category} SECTION</h2>
          <div className="line"></div>
        </div>
        <div className="product-list">
          {products.length === 0 ? (
            <h1>No Products Found</h1>
          ) : (
            products.map(product => (
              <Product
                key={product._id}
                id={product._id}
                imgSrc={`${product.imageUrl}`}
                title={product.name}
                price={product.price}
                category={product.category}
                subcategory={product.subcategory}
              />
            ))
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Shopping;
