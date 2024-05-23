import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Fifa 19", price: 44.00, quantity: 2, image: "https://adopt.twic.pics/media/catalog/product/w/o/wonderfl_intense_50_ml_ecom_copie.jpg?twic=v1" },
        { id: 2, name: "Glacier White 500GB", price: 249.99, quantity: 1, image: "https://adopt.twic.pics/media/catalog/product/w/o/wonderfl_intense_50_ml_ecom_copie.jpg?twic=v1" },
        { id: 3, name: "Platinum Headset", price: 119.99, quantity: 1, image: "https://adopt.twic.pics/media/catalog/product/w/o/wonderfl_intense_50_ml_ecom_copie.jpg?twic=v1" },
    ]);

    const handleQuantityChange = (id, delta) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const handleRemove = id => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="App">
            <section>
                <div className="cart">
                    <div className="cart-details">
                        <h2>Shopping Cart</h2>
                        <div className="cart-items">
                            <div className="cart-header">
                                <span>Product Details</span>
                                <span>Quantity</span>
                                <span>Price</span>
                                <span>Total</span>
                            </div>
                            {items.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt={item.name} className="product-image" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>PS4</p>
                                        <button className="btn-remove" onClick={() => handleRemove(item.id)}>Remove</button>
                                    </div>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    </div>
                                    <div className="item-price">
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="item-total">
                                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/" className="continue-shopping">
                            <FontAwesomeIcon icon={faHome} /> Continue Shopping
                        </Link>
                    </div>
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-details">
                            <div className="summary-item">
                                <span>Items</span>
                                <span>{totalItems}</span>
                            </div>
                     
                            <div className="summary-item">
                                <span>Promo Code</span>
                                <input type="text" placeholder="Enter your code" />
                                <button className="apply-button">Apply</button>
                            </div>
                            <div className="summary-total">
                                <span>Total Cost</span>
                                <span>${(totalCost ).toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="checkout-button" >Checkout</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
