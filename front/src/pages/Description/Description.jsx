import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../../components/cartcontext';
import './Description.css';

function Description() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8001/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const categoryClass = product.category.toLowerCase() === 'men' ? 'men' : 'women';

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.imageUrl });
    toast.success(`${product.name} added to cart successfully`);
  };

  return (
    <>
      <div className="topm">
        <p>New here? Get 20% off everything! with code: ImNew</p>
      </div>
      <div className={`description-container ${categoryClass}`}>
        <div className="description-image-container">
          <img src={`${product.imageUrl}`} alt={product.name} className="description-image" />
        </div>
        <div className="description-details">
          <h1 className="description-title">{product.name}</h1>
          <p className="description-price">${product.price.toFixed(2)}</p>
          <p className="description-text">{product.description}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Description;
