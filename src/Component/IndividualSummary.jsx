import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import "./Style.css";

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

function IndividualSummary() {
  const initialValues = { email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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
        const response = await fetch('http://127.0.0.1:8000/event_registration_app/get-user/', {
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
          const data = await response.json();
          setUserData(data);
          setServerMessage('success');
        } else {
          setServerMessage('error');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
        setServerMessage('error');
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
            <h1>User Information<br /></h1>
           
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Summary Form</h2>
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
      {serverMessage === 'error' && (
        <div className="ui message error">
          User not found
        </div>
      )}
      {serverMessage === 'success' && userData && (
        <div className="user-data" style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#333', fontWeight: 'bold' }}>User Information</h2>
        <p><strong>Name:</strong> <span style={{ fontWeight: 'bold' }}>{userData.fullname}</span></p>
        <p><strong>Email:</strong> <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>
        <p><strong>Blood Group:</strong> <span style={{ fontWeight: 'bold' }}>{userData.blood_group}</span></p>
        <p><strong>Payment Method:</strong> <span style={{ fontWeight: 'bold' }}>{userData.payment_method}</span></p>
        <p><strong>Phone number:</strong> <span style={{ fontWeight: 'bold' }}>{userData.phonenumber}</span></p>
        <p><strong>Number of Guests:</strong> <span style={{ fontWeight: 'bold' }}>{userData.guests}</span></p>
        <p><strong>Total Amount Paid:</strong> <span style={{ fontWeight: 'bold' }}>{userData.total_amount}</span></p>
      </div>
      )}
      <div className="link">
        <Link to="/registration" className="NA">Not Registered?</Link>
      </div>
    </div>
  );
}

export default IndividualSummary;
