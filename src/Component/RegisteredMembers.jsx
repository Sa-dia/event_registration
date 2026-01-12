import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisteredMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/event_registration_app/get_registered_members/');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'blue' }}>Registered Members</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid black' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #000' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid black' }}>{member.fullname}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegisteredMembers;
