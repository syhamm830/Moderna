import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHome } from '@fortawesome/free-solid-svg-icons';
import bg from '../../assets/SignBack.png'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        try {
            const response = await fetch('http://localhost:8001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Login successful!');
                localStorage.setItem('token', result.token);
                
                if (result.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/');
                }
            } else {
                toast.error(result.message || 'Login failed!');
            }
        } catch (error) {
            toast.error('An error occurred during login!');
        }
    };

    return (
        <div className="App">
            <ToastContainer />
            <section>
                <div className="register">
                    <div className="col1">
                        <h2>Sign In</h2>
                        <span>Register And Unlock A New Adventure</span>
                        <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="icon" />
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="Email"
                                    className={errors.email ? 'error-input' : ''}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock} className="icon" />
                                <input
                                    type="password"
                                    {...register("password", { required: "Password is required" })}
                                    placeholder="Password"
                                    className={errors.password ? 'error-input' : ''}
                                />
                                {errors.password && <p className="error">{errors.password.message}</p>}
                            </div>
                            <button className="btn">Sign In</button>
                        </form>
                        <div className="links">
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHome} className="icon" /> Back to Home
                            </Link>
                        </div>
                    </div>
                    <div className="col2">
                        <img src={bg} alt="Sign In Background" />
                    </div>
                </div>
            </section>
        </div>
    );
}
