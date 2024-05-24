import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProduct.css';
const categories = {
    Men: ["Skincare", "Haircare", "Fragrance", "Bodycare"],
    Women: ["Skincare", "Haircare", "Fragrance", "Bodycare"]
  };
  
const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ title: '', price: '', description: '', imageUrl: '', category: '', subcategory: '', stock: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                toast.error('Error fetching product details!');
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.title]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/products/${id}`, product);
            toast.success('Product updated successfully!');
            navigate('/admin/products');
        } catch (error) {
            toast.error('Error updating product!');
        }
    };

    return (
        <div classtitle="edit-product">
            <ToastContainer />
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" title="title" placeholder="Product title" value={product.title} onChange={handleChange} required />
                <input type="number" title="price" placeholder="Product Price" value={product.price} onChange={handleChange} required />
                <textarea title="description" placeholder="Product Description" value={product.description} onChange={handleChange} required />
                <input type="text" title="imageUrl" placeholder="Product Image URL" value={product.imageUrl} onChange={handleChange} required />
                <select title="category" value={product.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {Object.keys(categories).map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select title="subcategory" value={product.subcategory} onChange={handleChange} required>
                    <option value="">Select Subcategory</option>
                    {product.category && categories[product.category].map((subcategory) => (
                        <option key={subcategory} value={subcategory}>{subcategory}</option>
                    ))}
                </select>
                <input type="number" title="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
