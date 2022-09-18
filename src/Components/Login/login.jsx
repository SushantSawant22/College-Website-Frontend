import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import H_Page from '../../H_Page';
import { useAuth } from '../Auth';
import './login.css';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user,setUser] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();


    // User Login info
    const database = [
        {
            username: "Sushant",
            password: "sushant35"
        },
        {
            username: "Aryan",
            password: "aryan02"
        },
        {
            username: "Kunal",
            password: "kunal13"
        },
        {
            username: "Abhinandan",
            password: "abhi64"
        }
    ];

    const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                auth.login(userData.username);
                navigate('/')
                
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required placeholder='Enter your Name'/>
                    <span className='error'>{renderErrorMessage("uname")}</span>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required placeholder='Enter your Password'/>
                    <span className='error'>{renderErrorMessage("pass")}</span>
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Login</div>
                {isSubmitted ? alert("Successfully Login") : renderForm}
            </div>
        </div>
    );




}

export default Login;

