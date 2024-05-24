import React, { useState, useEffect } from 'react';
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
    const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '', category: '', subcategory: '', stock: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8001/products/${id}`);
                const data = await response.json();
                setProduct(data);
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
        // Create a copy of the product object without the _id, createdAt, and __v fields
        const { _id, createdAt, __v, ...productData } = product;
        try {
            const response = await fetch(`http://localhost:8001/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                toast.success('Product updated successfully!');
                navigate('/admin/products');
            } else {
                const errorData = await response.json();
                toast.error(`Error updating product: ${errorData.message}`);
            }
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
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
