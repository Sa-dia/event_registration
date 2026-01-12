import React from 'react'
import './Style1.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function ForgetPassword() {
    const initialValues = {email: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      return errors;
    };
  
    return ( 
        <div class="conform1">
          <div >
            <div class="formcontent1">
          <p>
<h2>Reset your password?<br/></h2>
Please provide the email address that you used for your account.<br/>
We will send you an email that will allow you to reset your password.<br/>
          </p>  
          </div>
        </div>  
        <form onSubmit={handleSubmit}>
        <div class="ui divider"></div>
        <div class="ui form">
        <div class="field">
             <label>Email *</label> 
             <br/>
            <input
              type="text"
              name="email"
              placeholder="i.e. abcd1234@gmail.com"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.email}</p>
          <button className="login-btn">Submit</button>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div class="ui message success"><Link to="/otp">Click</Link></div>
      ) : (
        //  <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <p1></p1>
      )}
        </div>
        {/* <button class="fluid ui button blue"><Link to="/otp">Done</Link></button> */}
        </form> 
        </div>
     );
}

export default ForgetPassword;