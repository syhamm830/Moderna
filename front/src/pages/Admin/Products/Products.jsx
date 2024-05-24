import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => toast.error('Failed to fetch products'));
    }, []);

    const handleDelete = id => {
        fetch(`http://localhost:8001/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message);
                } else {
                    setProducts(products.filter(product => product.id !== id));
                    toast.success('Product deleted successfully');
                }
            })
            .catch(error => toast.error('Failed to delete product'));
    };

    const handleEdit = id => {
        // Edit functionality can be implemented here
        toast.info(`Edit functionality for product ID ${id} not implemented yet`);
    };

    return (
        <div className="products">
            <ToastContainer />
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img src={product.imageUrl} alt={product.name} className="product-image" /></td>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => handleEdit(product.id)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
