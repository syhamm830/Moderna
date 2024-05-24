import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
            <li>
                <li><Link to="/admin/statistics">Statistics</Link></li>
                <li><Link to="/admin/products">Products</Link></li>
                <li><Link to="/admin/products/create">Create Product</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
                <li><Link to="/admin/orders">Orders</Link></li>
            </li>
            </ul>
        </div>
    );
};

export default Sidebar;
