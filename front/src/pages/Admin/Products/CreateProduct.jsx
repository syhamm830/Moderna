import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import categories from 'C:\Users\salou\OneDrive\Documents\GitHub\Moderna\back\validation\categories.js';
import './CreateProduct.css';

const CreateProduct = () => {
    const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '', category: '', subcategory: '', stock: '' });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products', product);
            toast.success('Product created successfully!');
            setProduct({ name: '', price: '', description: '', imageUrl: '', category: '', subcategory: '', stock: '' });
        } catch (error) {
            toast.error('Error creating product!');
        }
    };

    return (
        <div className="create-product">
            <ToastContainer />
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Product Price" value={product.price} onChange={handleChange} required />
                <textarea name="description" placeholder="Product Description" value={product.description} onChange={handleChange} required />
                <input type="text" name="imageUrl" placeholder="Product Image URL" value={product.imageUrl} onChange={handleChange} required />
                <select name="category" value={product.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {Object.keys(categories).map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select name="subcategory" value={product.subcategory} onChange={handleChange} required>
                    <option value="">Select Subcategory</option>
                    {product.category && categories[product.category].map((subcategory) => (
                        <option key={subcategory} value={subcategory}>{subcategory}</option>
                    ))}
                </select>
                <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
