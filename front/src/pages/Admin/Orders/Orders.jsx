// src/pages/Admin/Orders/Orders.jsx
import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([
        { id: 1, product: "Product 1", user: "User 1", status: "Pending" },
        { id: 2, product: "Product 2", user: "User 2", status: "Delivered" },
    ]);

    const handleStatusChange = id => {
        setOrders(orders.map(order => 
            order.id === id ? { ...order, status: order.status === "Pending" ? "Delivered" : "Pending" } : order
        ));
    };

    return (
        <div className="orders">
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.product}</td>
                            <td>{order.user}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleStatusChange(order.id)}>
                                    {order.status === "Pending" ? "Mark as Delivered" : "Mark as Pending"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
