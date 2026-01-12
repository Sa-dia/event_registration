import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style1.css';
// import './FormSummary';
import { Link,useHistory } from 'react-router-dom';
function Group() {
    return ( 
        <div>
            <button className='individual-btn'><Link to="/GroupEvent" className='regForm'>Create Event</Link></button><br/>
            <button className='individual-btn'><Link to="/GroupRegistration" className='regForm'>Create User</Link></button><br/>
            <button className='individual-btn'> <Link to="/RegisteredMembers" className='regForm'>Registered Memebers</Link></button><br/>
            <button className='individual-btn'> <Link to="/GroupEventSummary" className='regForm'>Registered Members Summary</Link></button>
        </div>
     );
}

export default Group;