import React, { useState, useEffect } from 'react';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        fetch('http://localhost:8001/orders')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch orders');
                }
            })
            .then(data => {
                const sortedOrders = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                setOrders(sortedOrders);
            })
            .catch(error => console.error('Error fetching orders:', error));
    };

    const handleStatusChange = id => {
        const updatedOrders = orders.map(order =>
            order.id === id ? { ...order, status: order.status === "Pending" ? "Delivered" : "Pending" } : order
        );
        const sortedOrders = updatedOrders.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setOrders(sortedOrders);
    };

    return (
        <div className="orders">
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Fullname</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Card Number</th>
                        <th>Total Cost</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{index + 1}</td> 
                            <td>{order.fullName}</td>
                            <td>{order.phoneNumber}</td>
                            <td>{order.address}</td>
                            <td>{order.cardNumber}</td>
                            <td>{order.totalCost}</td>
                            <td className='stat'>{order.status}
                            <button onClick={() => handleStatusChange(order.id)}>
                                    {order.status === "Pending" ? "Mark as Delivered" : "Mark as Pending"}
                            </button>
                            </td>
                            <td>{new Date(order.createdAt).toLocaleString()}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
