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

function GroupEvent() {
  const initialValues = { fullname: "", email: "", number_of_students: "", cost_per_person: "" };
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
          'http://127.0.0.1:8000/event_registration_app/create-group-event-info/',
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
      errors.fullname = "Full name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.number_of_students) {
      errors.number_of_students = "Number of students is required!";
    } else if (isNaN(values.number_of_students)) {
      errors.number_of_students = "Number of students must be a number!";
    }
    if (!values.cost_per_person) {
      errors.cost_per_person = "Cost per person is required!";
    } else if (isNaN(values.cost_per_person)) {
      errors.cost_per_person = "Cost per person must be a number!";
    }
    return errors;
  };

  return (
    <div className="conform1">
      <form onSubmit={handleSubmit}>
        <h2>Group Event Creation Form</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className="name">Full name *</label>
            <br />
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              value={formValues.fullname}
              onChange={handleChange}
              required
            />
            <p>{formErrors.fullname}</p>
          </div>
          <div className="field">
            <label>Email *</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <p>{formErrors.email}</p>
          </div>
          <div className="field">
            <label>Number of Students *</label>
            <br />
            <input
              type="text"
              name="number_of_students"
              placeholder="Number of Students"
              value={formValues.number_of_students}
              onChange={handleChange}
              required
            />
            <p>{formErrors.number_of_students}</p>
          </div>
          <div className="field">
            <label>Cost per Person *</label>
            <br />
            <input
              type="text"
              name="cost_per_person"
              placeholder="Cost per Person"
              value={formValues.cost_per_person}
              onChange={handleChange}
              required
            />
            <p>{formErrors.cost_per_person}</p>
          </div>
          <a href="/" className='btns cancel'>Cancel</a>
          <button className='btns submit-btn'>Submit</button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        alert("Registration is successful")
      )}
    </div>
  );
}

export default GroupEvent;
