import React, { useState } from "react";
import './Register.css'


export const StudentRegister = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(phoneNumber);
  }

  return (
    <div className="auth-form-container">
      <h2>Register as a Student</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Register now</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
}