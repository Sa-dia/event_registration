import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style1.css';
import './FormSummary';
import { Link,useHistory } from 'react-router-dom';

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

function Registration() {
  const initialValues = { fullname: '', email: '', blood_group: '', payment_method: '', guests: '0', total_amount: 0 };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFormValues = { ...formValues, [name]: value };

    // Calculate total amount
    if (name === 'guests') {
      const numberOfGuests = parseInt(value, 10);
      const totalAmount = (numberOfGuests + 1) * 5000; // Including the person registering
      newFormValues = { ...newFormValues, total_amount: totalAmount };
    }

    setFormValues(newFormValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      try {
        const csrfToken = getCSRFToken(); // Get CSRF token
        const response = await axios.post(
          'http://127.0.0.1:8000/event_registration_app/register/',
          formValues,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
            }
          }
        );
        console.log(response.data); // Handle response from Django
        setIsSubmit(false);
        // history.push(`/FormSummary/${formValues.email}`);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
  
    if (!values.payment_method) {
      errors.payment_method = "Payment method is required!";
    }
    if (!values.guests) {
      errors.guests = "Number of guests is required!";
    }
    return errors;
  };

  return (
    <div className="conform1">
      <div>
        {/* <div className="formcontent1">
          <p>
            <h1>Event-Registration<br /></h1>
            Fill Up The form to join the Event.<br />
          </p>
        </div> */}
      </div>
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
            <label htmlFor="batch" className="form-label mt-2">Batch *</label>
            <select className="form-select" name="batch" onChange={handleChange} required>
              <option selected disabled value="">---</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(batch => (
                <option key={batch} value={`CSE ${batch}`}>CSE {batch}</option>
              ))}
            </select>
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
          <div className="field">
            <label>Number of Guests</label>
            <select
              className="form-select"
              name="guests"
              value={formValues.guests}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select number of guests</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="field">
            <label>Total Amount to Pay (in BDT)</label>
            <input
              type="number"
              name="total_amount"
              value={formValues.total_amount}
              readOnly
            />
          </div>  
          <a href="/" className='btns cancel'>Cancel</a>
          <button className='btns submit-btn'>Submit</button>
         
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            // alert('You have successfully registered to this event!!')
            // <Link to="/FormSummary" className="NA">FormSummary</Link>
            // <Link to={`/FormSummary/${formValues.email}`} className="NA">FormSummary</Link>
            // <Link to={{ pathname: "/FormSummary", state: { email: formValues.email } }} className="NA">FormSummary</Link>
            // {showSummary && <FormSummary formValues={formValues} />}
            <div style={{ backgroundColor: 'rgb(201, 236, 243)', padding: '1rem', borderRadius: '8px', border: '1px solid black', margin: '1rem 0' }}>
  <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'rgb(45, 45, 152)' }}>Registration Summary</h2>
  <p><strong>Full Name:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.fullname}</span></p>
  <p><strong>Email:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.email}</span></p>
  <p><strong>Batch:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.batch}</span></p>
  <p><strong>Blood Group:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.blood_group}</span></p>
  <p><strong>Payment Method:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.payment_method}</span></p>
  <p><strong>Number of Guests:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.guests}</span></p>
  <p><strong>Total Amount:</strong> <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{formValues.total_amount}</span></p>
</div>
          ) : (
            <p></p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Registration;
