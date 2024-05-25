import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        birthdate: '',
        role: ''
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8001/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            toast.error('Failed to fetch users');
        }
    };

    const handleDelete = async id => {
        try {
            const response = await fetch(`http://localhost:8001/users/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setUsers(users.filter(user => user._id !== id));
                toast.success('User deleted successfully');
            } else {
                toast.error('Failed to delete user');
            }
        } catch (error) {
            toast.error('Failed to delete user');
        }
    };

    const handleEdit = user => {
        setEditingUser(user._id);
        setFormData({
            name: user.name,
            email: user.email,
            password: '',
            phone: user.phone,
            birthdate: user.birthdate.split('T')[0],
            role: user.role
        });
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { password, ...updatedData } = formData;
        if (password) {
            updatedData.password = password;
        }
        try {
            const response = await fetch(`http://localhost:8001/users/${editingUser}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(users.map(user => (user._id === editingUser ? data : user)));
                setEditingUser(null);
                toast.success('User updated successfully');
            } else {
                toast.error('Failed to update user: ' + data.message);
            }
        } catch (error) {
            toast.error('Failed to update user');
        }
    };

    return (
        <div className="users">
            <ToastContainer />
            <h2>Users</h2>
            {editingUser && (
                <form className="edit-form" onSubmit={handleSubmit}>
                    <h3>Edit User</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password (leave blank to keep current password)"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="birthdate"
                        placeholder="Birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        required
                    />
                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit">Update User</button>
                    <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
                </form>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
