import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style1.css';
import { Link, useHistory } from 'react-router-dom';

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

function GroupRegistration() {
  const initialValues = { fullname: '', email: '', blood_group: '', phonenumber: '', payment_method: ''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

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
          'http://127.0.0.1:8000/event_registration_app/register_group_event/',
          formValues,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
            }
          }
        );
        setResponseMessage(response.data.message);
        setIsSubmit(false);
      } catch (error) {
        console.error('Error:', error);
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
    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.payment_method) {
      errors.payment_method = "Payment method is required!";
    }
   
    return errors;
  };

  return (
    <div className="conform1">
      <form onSubmit={handleSubmit}>
        <h2>Event-Registration Form</h2>
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
          </div>
          <p>{formErrors.fullname}</p>
          <div className="field">
            <label>Email *</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="i.e. abcd1234@gmail.com"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Phone Number</label>
            <br />
            <input
              type="text"
              name="phonenumber"
              placeholder="i.e. 017100****9"
              value={formValues.phonenumber}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label>Blood Group</label>
            <select
              className="form-select"
              name="blood_group"
              value={formValues.blood_group}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your blood group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="field">
            <label>Payment Method</label>
            <select
              className="form-select"
              name="payment_method"
              value={formValues.payment_method}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select payment method</option>
              <option value="cash">Cash</option>
              <option value="bkash">Bkash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="card">Card</option>
            </select>
          </div>
          <a href="/" className='btns cancel'>Cancel</a>
          <button className='btns submit-btn'>Submit</button>
          {responseMessage && (
            <div
              style={{
                backgroundColor: 'skyblue',
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #333',
                margin: '1rem 0'
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: responseMessage === 'Registered successfully!' ? 'green' : 'red'
                }}
              >
                {responseMessage}
              </h2>
              {responseMessage === 'Registered successfully!' && (
                <>
                  <p><strong>Full Name:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.fullname}</span></p>
                  <p><strong>Email:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.email}</span></p>
                  <p><strong>Phonenumber:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.phonenumber}</span></p>
                  <p><strong>Blood Group:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.blood_group}</span></p>
                  <p><strong>Payment Method:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.payment_method}</span></p>
                </>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default GroupRegistration;
