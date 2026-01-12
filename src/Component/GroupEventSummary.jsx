// RegistrationStats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventSummary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-light-svg-icons';

const GroupEventSummary = () => {
    const [stats, setStats] = useState({ total_users: 0, total_guests: 0 });
    const [user,setUser] = useState({ total_users: 0, total_guests: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/event_registration_app/group_registration_stats/');
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching registration stats:', error);
            }
        };

        fetchStats();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/event_registration_app/group_pending_stats/');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching pending stats:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="summary-container">
        <div class="Confirm">
        <div className="summary-header1">
        <FontAwesomeIcon icon="fa-light fa-cart-shopping" />
            <h3 class="c1">Confirmed Summary</h3>
        </div>
        <div className="summary-content1">
            <p>Members: {stats.total_users}</p>
            {/* <p>Guests: {stats.total_guests}</p> */}
            <p>Total: {stats.total_users}</p>
        </div>
        <div className="summary-footer1">
            <p>Thank you for your participation!</p>
        </div>
        </div>
        <div class="pending">
        <div className="summary-header2">
        {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
            <h3 class="c2">Pending Summary</h3>
        </div>
        <div className="summary-content2">
            <p>Members: {user.total_users}</p>
            {/* <p>Guests: {user.total_guests}</p> */}
            <p>Total: {user.total_users}</p>
        </div>
        <div className="summary-footer2">
            <p>Thank you for your participation!</p>
        </div>
        </div>
        <div class="total">
        <div className="summary-header3">
        {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
            <h3 class="c3">Total Summary</h3>
        </div>
        <div className="summary-content3">
            <p>Members: {user.total_users+stats.total_users}</p>
            {/* <p>Guests: {user.total_guests+stats.total_guests}</p> */}
            <p>Total: {user.total_users +stats.total_users}</p>
        </div>
        <div className="summary-footer3">
            <p>Thank you for your participation!</p>
        </div>
        </div>
    </div>
    );
};

export default GroupEventSummary;
