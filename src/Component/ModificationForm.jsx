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

function ModificationForm() {
    
  const initialValues = { old_email: '', new_email: '', payment_method: '', guests: '0', total_amount: 0, extra_amount_per_person: 0 };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      let newFormValues = { ...formValues, [name]: value };

      if (name === 'guests') {
          const numberOfGuests = parseInt(value, 10);
          const extraAmount = numberOfGuests * 5000;
          newFormValues = { ...newFormValues, extra_amount_per_person: extraAmount };
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
              const response = await axios.put(
                  'http://127.0.0.1:8000/event_registration_app/update_registration/',
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
              alert('Update Successfully');
          } catch (error) {
              console.error('Error:', error);
          }
      }
  };

  const validate = (values) => {
      const errors = {};
      if (!values.old_email) {
          errors.old_email = "Old email is required!";
      }

      return errors;
  };

  return (
      <div className="conform1">
          <form onSubmit={handleSubmit}>
              <h2>Modification Form</h2>
              <div className="ui divider"></div>
              <div className="ui form">
                  <div className="field">
                      <label>Old Email *</label>
                      <br />
                      <input
                          type="email"
                          name="old_email"
                          placeholder="Your old email"
                          value={formValues.old_email}
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <p>{formErrors.old_email}</p>
                  <div className="field">
                      <label>New Email If you want change</label>
                      <br />
                      <input
                          type="email"
                          name="new_email"
                          placeholder="Your new email"
                          value={formValues.new_email}
                          onChange={handleChange}
                      />
                  </div>
                  <div className="field">
                      <label>Payment Method *</label>
                      <select
                          className="form-select"
                          name="payment_method"
                          value={formValues.payment_method}
                          onChange={handleChange}
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
                      <label>Number of Guests to Add</label>
                      <select
                          className="form-select"
                          name="guests"
                          value={formValues.guests}
                          onChange={handleChange}
                      >
                          <option value="" disabled>Select number of guests to add</option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                      </select>
                  </div>
                  <div className="field">
                      <label>Extra Amount to Pay per Person (in BDT)</label>
                      <input
                          type="number"
                          name="extra_amount_per_person"
                          value={formValues.extra_amount_per_person}
                          readOnly
                      />
                  </div>
                  <Link to="/mainpage" className='btns cancel'>Cancel</Link>
                  <button className="btns submit-btn">Submit</button>
                  {Object.keys(formErrors).length === 0 && isSubmit ? (
                      <p style={{ color: 'green', fontWeight: 'bold' }}>Update Successfully</p>
                  ) : (
                      <p></p>
                  )}
              </div>
          </form>
      </div>
  );      }
      
    
export default ModificationForm;
