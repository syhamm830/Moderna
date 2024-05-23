import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faHome, faCalendar, faPhone } from '@fortawesome/free-solid-svg-icons';
import bg from '../../assets/SignBack.png'; 

export default function SignUp() {
    const { register, handleSubmit,formState: { errors }, watch } = useForm();
    
    const onSubmit = data => console.log(data);

    const validateAge = (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 13 || "You must be at least 13 years old";
    };

    return (
        <div className="App">
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
                                        required: "Date of birth is required",
                                        validate: validateAge
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
                                            value: /^[0-9]{10,15}$/,
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
                            <p>Already have an account? <Link to="/contact">Sign In</Link></p>
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
