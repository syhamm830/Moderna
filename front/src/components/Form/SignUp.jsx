import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faHome, faCalendar, faPhone } from '@fortawesome/free-solid-svg-icons';
import bg from '../../assets/SignBack.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        const { username, email, password, dob, phone } = data;
    
        try {
            const response = await fetch('http://localhost:8001/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: username,
                    email,
                    password,
                    birthdate: dob,
                    phone,
                }),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.success('Registration successful!');
                // Delay navigation by 2 seconds
                setTimeout(() => navigate('/contact'), 2000);
            } else {
                toast.error(result.message || 'Registration failed!');
            }
        } catch (error) {
            toast.error('An error occurred during registration!');
        }
    };

    return (
        <div className="App">
            <ToastContainer />
            <section>
                <div className="register">
                    <div className="col2">
                        <img src={bg} alt="Sign Up Background" />
                    </div>
                    <div className="col1">
                        <h2>Sign Up</h2>
                        <span>Create an account to unlock new adventures</span>
                        <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="icon" />
                                <input
                                    type="text"
                                    {...register("username", { required: "Username is required" })}
                                    placeholder="Username"
                                    className={errors.username ? 'error-input' : ''}
                                />
                                {errors.username && <p className="error">{errors.username.message}</p>}
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    placeholder="Email"
                                    className={errors.email ? 'error-input' : ''}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock} className="icon" />
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long"
                                        }
                                    })}
                                    placeholder="Password"
                                    className={errors.password ? 'error-input' : ''}
                                />
                                {errors.password && <p className="error">{errors.password.message}</p>}
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock} className="icon" />
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) =>
                                            value === watch("password") || "Passwords do not match"
                                    })}
                                    placeholder="Confirm Password"
                                    className={errors.confirmPassword ? 'error-input' : ''}
                                />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faCalendar} className="icon" />
                                <input
                                    type="date"
                                    {...register("dob", {
                                        required: "Date of birth is required"
                                    })}
                                    className={errors.dob ? 'error-input' : ''}
                                />
                                {errors.dob && <p className="error">{errors.dob.message}</p>}
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faPhone} className="icon" />
                                <input
                                    type="tel"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{8,15}$/,
                                            message: "Invalid phone number"
                                        }
                                    })}
                                    placeholder="Phone Number"
                                    className={errors.phone ? 'error-input' : ''}
                                />
                                {errors.phone && <p className="error">{errors.phone.message}</p>}
                            </div>
                            <div className="input-container checkbox-container">
                                <input
                                    type="checkbox"
                                    {...register("terms", { required: "You must agree to the terms and conditions" })}
                                    className={errors.terms ? 'error-input' : ''}
                                />
                                <label>I agree to all the terms and conditions</label>
                                {errors.terms && <p className="error">{errors.terms.message}</p>}
                            </div>
                            <button className="btn">Sign Up</button>
                        </form>
                        <div className="links">
                            <p>Already have an account? <Link to="/login">Sign In</Link></p>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHome} className="icon" /> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
