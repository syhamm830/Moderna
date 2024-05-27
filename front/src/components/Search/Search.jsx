import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import Product from '../../components/Product/Product';
import './Search.css';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:8001/products/results/search?q=${query}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch search results', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      <div className="topm">
        <p>Search Results for "{query}"</p>
      </div>
      <div className="title-container">
        <div className="line"></div>
        <h2 className="title">Search Results</h2>
        <div className="line"></div>
      </div>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <Product
              key={product._id}
              id={product._id}
              imgSrc={product.imageUrl}
              title={product.name}
              price={product.price}
              category={product.category}
              subcategory={product.subcategory}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SearchResults;
