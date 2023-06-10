import React from 'react';
import './StudentProfile.css'
const StudentProfile = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    contact: {
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.contact.email}</p>
        <p>Phone: {user.contact.phone}</p>
      </div>
    </div>
  );
};

export default StudentProfile;