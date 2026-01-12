import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

function AdminLogin() {
  const initialValues = { email: "" };
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
        const csrfToken = getCSRFToken();
        const response = await fetch('http://127.0.0.1:8000/event_registration_app/verify_admin_user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify({
            email: formValues.email,
          }),
        });

        if (response.status === 200) {
          setServerMessage('success');
        } else if (response.status === 404) {
          setServerMessage('not_admin');
        } else {
          setServerMessage('error');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setServerMessage('error');
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    }
    return errors;
  };

  return (
    <div className="conform">
      <div>
        <div className="formcontent">
          <p>
            <h1>Modify Your Information<br /></h1>
            Please give the email if you have already registered for the event or click on not <br />
            registered to register for the event<br />
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Form</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <button className="fluid ui button blue">Next</button>
        </div>
      </form>
      {serverMessage === 'success' && (
        <div className="ui message success"><Link to="/ModificationForm">Go to edit</Link></div>
      )}
      {serverMessage === 'error' && (
        <div className="ui message error">
          Invalid credentials
        </div>
      )}
      {serverMessage === 'not_admin' && (
        <div className="ui message warning">
          User is not an admin
        </div>
      )}
     
    </div>
  );
}

export default AdminLogin;
