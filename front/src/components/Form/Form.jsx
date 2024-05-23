import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHome } from '@fortawesome/free-solid-svg-icons';
import bg from '../../assets/SignBack.png'; 

export default function Form() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="App">
            <section>
                <div className="register">
                    <div className="col1">
                        <h2>Sign In</h2>
                        <span>Register And Unlock A New Adventure</span>
                        <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="icon" />
                                <input type="text" {...register("usernameOrEmail")} placeholder="Username or Email" />
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock} className="icon" />
                                <input type="password" {...register("password")} placeholder="Password" />
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
