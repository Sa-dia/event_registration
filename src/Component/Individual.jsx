import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style1.css';
// import './FormSummary';
import { Link,useHistory } from 'react-router-dom';
function Individual() {
    return ( 
        <div>
            <button className='individual-btn'><Link to="/DeleteRecord" className='regForm'>Delete User</Link></button><br/>
            <button className='individual-btn'><Link to="/username-form" className='regForm'>Create User</Link></button><br/>
            <button className='individual-btn'> <Link to="/edit-form" className='regForm'>Modify user Information</Link></button><br/>
            <button className='individual-btn'> <Link to="/IndividualSummary" className='regForm'>Read User Summary</Link></button><br/>
            <button className='individual-btn'> <Link to="/EventSummary" className='regForm'>Total Summary</Link></button>
        </div>
     );
}

export default Individual;