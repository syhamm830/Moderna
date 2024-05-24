import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditProduct.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '' });

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
        setProduct({ ...product, [e.target.name]: e.target.value });
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
        <div className="edit-product">
            <ToastContainer />
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Product Price" value={product.price} onChange={handleChange} required />
                <textarea name="description" placeholder="Product Description" value={product.description} onChange={handleChange} required />
                <input type="text" name="imageUrl" placeholder="Product Image URL" value={product.imageUrl} onChange={handleChange} required />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
