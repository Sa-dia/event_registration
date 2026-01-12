import react from 'react'
import './Style1.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function OTP() {
    const initialValues = {otp: "", passward:"",confirmpassward:""};
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
      if (!values.otp) {
        errors.otp = "OTP is required!";
      }else if(values.otp.length<4)
      {
        errors.otp = "OTP must be more than 4 characters"; 
      }
      else if(values.otp.length>6)
      {
        errors.otp = "OTP cannot exceed more than 6 characters";
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
       
            <div class="conform1">
              <div >
                <div class="formcontent1">
              <p>
    <h2>Enter Your OTP<br/></h2>
    {/* Please provide OTP that you get and <br/>
   then confirm the new password.<br/> */}
              </p>  
              </div>
            </div>  
            <form onSubmit={handleSubmit}>
            <div class="ui divider"></div>
            <div class="ui form">
            <div class="field">
                 <label>OTP *</label> 
                 <br/>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter the OTP"
                  value={formValues.otp}
                  onChange={handleChange}
                  required
                />
              </div>
              <p>{formErrors.otp}</p>
              <div class="field">
                 <label>Passward *</label> 
                 <br/>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter the Passward"
                  value={formValues.passward}
                  onChange={handleChange}
                  required
                />
              </div>
              <p>{formErrors.passward}</p>
              <div class="field">
                 <label>Confirm Passward *</label> 
                 <br/>
                <input
                  type="text"
                  name="confirmpassward"
                  placeholder="Comfirm Your Passward"
                  value={formValues.confirmpassward}
                  onChange={handleChange}
                  required
                />
              </div>
              <p>{formErrors.confirmpassward}</p>
              <button className="login-btn">Submit</button>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div class="ui message success"><Link to="/login">Click</Link></div>
      ) : (
        //  <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <p1></p1>
      )}
            </div>
            {/* <button class="fluid ui button blue"><Link to="/login">Done</Link></button> */}
            </form> 
            </div>
     );
}

export default OTP;