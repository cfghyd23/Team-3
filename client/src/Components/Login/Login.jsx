import React, { useState } from "react";
import './Login.css'
export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  const login = (e) => {
    // setEmail(e.target.value)
    localStorage.setItem("email", email)
    

  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" onClick={login}>Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Member Register here.
      </button>
      <button className="link-btn" onClick={() => props.onFormSwitch('studentregister')}>
        Don't have an account? Student Register here.
      </button>
    </div>
  );
}

