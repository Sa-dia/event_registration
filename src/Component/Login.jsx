import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Login() {
  const initialValues = { username: "", e_mail: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://127.0.0.1:8000/event_registration_app/login/', {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formValues.username,
          e_mail: formValues.e_mail,
          password: formValues.password,
        }),
      });

        if (response.status === 200) {
         setServerMessage(alert('Login Successful!'));
          // setServerMessage(<Link to='\mainpage'></Link>)
        } else {
          setServerMessage(alert('Invalid credentials'));
        }
      } catch (error) {
        console.error('Error during login:', error);
        if (error.response) {
          console.error('Server responded with a status code:', error.response.status);
          console.error('Server response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
        setServerMessage(alert('An error occurred. Please try again.'));
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.e_mail) {
      errors.e_mail = "Email is required!";
    } else if (!regex.test(values.e_mail)) {
      errors.e_mail = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="conform">

      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              type="text"
              name="e_mail"
              placeholder="Email"
              value={formValues.e_mail}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.e_mail}</p>
          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="login-btn">Login</button>
        </div>
      </form>
      {serverMessage && (
        <div className={`ui message ${serverMessage === 'Login successful' ? 'success' : 'error'}`}>
          {serverMessage}
        </div>
      )}
      <div className="link">
        <Link to="/registration-for-website" className="NA">No Account?</Link>
        <h4>Or</h4>
        <Link to="/forget-password" className="FP">Forget Password?</Link>
      </div>
    </div>
  );
}

export default Login;