import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../components/cartcontext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                            {cartItems.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt={item.name} className="product-image" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>PS4</p>
                                        <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
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
                                <span>Total Items:</span>
                                <span>{totalItems}</span>
                            </div>
                            <div className="summary-item">
                                <span>Total Cost:</span>
                                <span>${totalCost.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="checkout-button">
                            <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}><FontAwesomeIcon icon={faShoppingCart} /> Proceed to Checkout</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
