import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../cartcontext';

function Product({ id, imgSrc, title, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name: title, price, image: imgSrc });
    toast.success(`${title} added to cart successfully`);
  };

  return (
    <div className="product">
      <Link to={`/description/${id}`}>
        <img src={imgSrc} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
        <p className="product-price">{price} dt</p>
      </Link>
      <button className="cartbtn" onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default Product;
