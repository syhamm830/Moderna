import React from 'react';
import './Statistics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../../../components/Admin/Dashboard/dashboard';

const Statistics = () => {
    return (
        
        <div className="statistics">
            <Dashboard />
            <h2>Statistics</h2>
            <div className="stat-cards">
                <div className="stat-card">
                    <FontAwesomeIcon icon={faUsers} className="stat-icon" />
                    <div className="stat-info">
                        <h3>Users</h3>
                        <p>150</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FontAwesomeIcon icon={faBox} className="stat-icon" />
                    <div className="stat-info">
                        <h3>Products</h3>
                        <p>300</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FontAwesomeIcon icon={faShoppingCart} className="stat-icon" />
                    <div className="stat-info">
                        <h3>Orders</h3>
                        <p>200</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FontAwesomeIcon icon={faDollarSign} className="stat-icon" />
                    <div className="stat-info">
                        <h3>Revenue</h3>
                        <p>$5000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
