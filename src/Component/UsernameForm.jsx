import react from 'react'
import { useState, useEffect } from "react";
import "./Style.css";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function getCSRFToken() {
  let csrfToken = null;
  if (document.cookie) {
    document.cookie.split(';').forEach(cookie => {
      if (cookie.trim().startsWith('csrftoken=')) {
        csrfToken = cookie.trim().split('=')[1];
      }
    });
  }
  return csrfToken;
}

function UsernameForm() {
  const initialValues = { username: ""};
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
    setFormErrors(validate(formValues));
    const errors = validate(formValues);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      try {
        const csrfToken = getCSRFToken();
        const response = await fetch('http://127.0.0.1:8000/event_registration_app/username_verify/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
        body: JSON.stringify({
         username: formValues.username,
          // email: formValues.email,
          // password: formValues.password,
        }),
      });

      if (response.status === 200) {
        setServerMessage('success');
      } else {
        setServerMessage('error');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setServerMessage('error');
    }
  }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  useEffect(() => {
    if (serverMessage === 'success') {
     alert( <link to='/registration'>Go for Event</link>);
    }
  }, [serverMessage]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }
    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  return (
    <div class="un-form">
      <form onSubmit={handleSubmit}>
        {/* <h2>Login Form</h2> */}
        <h5>Enter your username <br/></h5>
         <div class="ui divider"></div> 
        <div class="ui form">
          <div class="field">
            
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.username}</p>
          <button className="fluid ui button blue">Next</button>
        </div>
      </form>
      {serverMessage === 'success' && (
        <div class="ui message success"><Link to="/registration">Go For Event</Link></div>
      )}
      {serverMessage === 'error' && (
        <div className="ui message error">
          Invalid credentials
        </div>
      )}
      <div className="link">
        <Link to="/registration-for-website" className="NA">Not Registered For Website?</Link>
      </div>
    </div>
  );
}

export default UsernameForm;