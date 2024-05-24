import React, { useState } from 'react';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 100 ,stock: 200},
        { id: 2, name: "Product 2", price: 200 ,stock: 250},
    ]);

    const handleDelete = id => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleEdit = id => {
        // Edit functionality
    };

    return (
        <div className="products">
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock Available</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
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
