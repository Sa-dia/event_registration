import React, { useState } from 'react';
import axios from 'axios';
import './Style1.css';

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

function RegistrationForWebsite() {
  const initialValues = { fullname: "",username: "", e_mail: "" ,password:"",confirmpassword:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      try {
        const csrfToken = getCSRFToken(); // Get CSRF token
        const response = await axios.post(
          'http://127.0.0.1:8000/event_registration_app/user/',
          formValues,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
            }
          }
        );
        console.log(response.data); // Handle response from Django
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.e_mail) {
      errors.e_mail = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if(values.confirmpassword==="" || values.confirmpassword!==values.password)
    {
        errors.confirmpassword = "Password is not matched";
    }
    return errors;
  };

  return (
    <div className="conform1">
      <form onSubmit={handleSubmit}>
        <h2>Sign - up Form</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className="name">Full name *</label>
            <br />
            <input
              type="text"
              name="fullname"
              placeholder="as per certificate"
              value={formValues.fullname}
              onChange={handleChange}
              required
            />
            <p>{formErrors.fullname}</p>
          </div>
          <div class="field">
             <label class="name">Username *</label> 
            <br/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email *</label>
            <br />
            <input
              type="email"
              name="e_mail"
              placeholder="i.e. abcd1234@gmail.com"
              value={formValues.e_mail}
              onChange={handleChange}
              required
            />
            <p>{formErrors.e_mail}</p>
          </div>
          <div class="field">
             <label>Password *</label> 
             <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.password}</p>
          <div class="field">
             <label> Confirm Password *</label>
             <br/>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formValues.confirmpassword}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.confirmpassword}</p>
          <a href="/" className='btns cancel'>Cancel</a>
          <button className='btns submit-btn' >Submit</button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        alert("Account Registration for website is successful")
      )}
    </div>
  );
}

export default RegistrationForWebsite;
