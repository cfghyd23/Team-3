import React, { useState } from "react";
import './Register.css'
export const StudentRegister = (props) => {
    //const [email, setEmail] = useState('');
        const [name, setName] = useState('');
        const [pass, setPass] = useState('');

        const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register as a Student</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            
            <label htmlFor="age">Age</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <label htmlFor="contact">Contact</label>
            <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="Enter your phone number"
                id="phoneNumber"
                name="phoneNumber"
            />
        
            <label htmlFor="options">Options</label>
            <select>

            <option value="15-18">15-18</option>

            <option value="19-23">19-23</option>

            <option value=">23">greater than 23</option>
            
            </select>
     <br></br>
        
            <button type="submit">Register now</button>
            
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    );

}