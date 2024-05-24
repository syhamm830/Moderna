import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CreateProduct.css';

const categories = {
    Men: ["Skincare", "Haircare", "Fragrance", "Bodycare"],
    Women: ["Skincare", "Haircare", "Fragrance", "Bodycare"]
};

const CreateProduct = ({ setLoading }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = { title, price, description, imageUrl, category, subcategory, stock };
        try {
            const response = await fetch('http://localhost:8001/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            if (response.status !== 201) {
                toast.error(data.message || 'Error creating product!');
            } else {
                toast.success(`Created a new product ${title}`);
                setTitle('');
                setPrice('');
                setDescription('');
                setImageUrl('');
                setCategory('');
                setSubcategory('');
                setStock('');
                setLoading(true);
            }
        } catch (error) {
            toast.error('Error creating product!');
        }
    };

    return (
        <div className="create-product">
            <ToastContainer />
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Product Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" name="price" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <textarea name="description" placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="text" name="imageUrl" placeholder="Product Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    {Object.keys(categories).map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select name="subcategory" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} required>
                    <option value="">Select Subcategory</option>
                    {category && categories[category].map((subcategory) => (
                        <option key={subcategory} value={subcategory}>{subcategory}</option>
                    ))}
                </select>
                <input type="number" name="stock" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
