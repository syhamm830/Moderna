import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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
                    setProducts(products.filter(product => product._id !== id));
                    toast.success('Product deleted successfully');
                }
            })
            .catch(error => toast.error('Failed to delete product'));
    };

    const handleEdit = id => {
        navigate(`/admin/products/edit/${id}`);
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
                        <th>Category</th>
                        <th>Sub-Category</th>
                        <th>Stock Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td><img src={product.imageUrl} alt={product.name} className="product-image" /></td>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.category}</td>
                            <td>{product.subcategory}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button className='btn' onClick={() => handleEdit(product._id)}>Edit</button>
                                <button className='btn' onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
