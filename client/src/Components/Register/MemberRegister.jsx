import React, { useState } from "react";
import './Register.css'
export const MemberRegister = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(phoneNumber);
  }

  return (
    <div className="auth-form-container">
      <h2>Register as a Member</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
          <label htmlFor="options">Options</label>
            <select>

            <option value="Local">Local</option>

            <option value="city">City</option>

            <option value="state">State</option>
            <option value="nation">Nation</option>

            </select>
            <br></br>
        <button type="submit">Register now</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
}

export default MemberRegister;
