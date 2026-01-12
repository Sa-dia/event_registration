import React from 'react';
import { useLocation } from 'react-router-dom';

function FormSummary(props) {
    const { email } = props.location.state;
    
    return (
      <div>
        <h2>Form Summary</h2>
        <p>Email: {email}</p>
      </div>
    );
  }
  
export default FormSummary;
