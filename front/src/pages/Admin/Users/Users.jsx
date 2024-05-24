// src/pages/Admin/Users/Users.jsx
import React, { useState } from 'react';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "User 1", type: "Customer" },
        { id: 2, name: "User 2", type: "Admin" },
    ]);

    const handleDelete = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEdit = id => {
        // Edit functionality
    };

    return (
        <div className="users">
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.type}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
