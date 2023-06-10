import React, { useState } from 'react';
import './Donate.css'; 



function Donate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationCategory, setDonationCategory] = useState('health');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(Number(event.target.value));
  };

  const handleDonationCategoryChange = (event) => {
    setDonationCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform donation logic here
    console.log('Donation Details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Donation Amount:', donationAmount);
    console.log('Donation Category:', donationCategory);
    // You can use this data to send an API request, store in a database, etc.
  };

  return (
    <div>
      <h1 id="Donate">Donate</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Donation Amount:
          <input type="number" value={donationAmount} onChange={handleDonationAmountChange} />
        </label>
        <br />
        <label>
          Donation Category:
          <select value={donationCategory} onChange={handleDonationCategoryChange}>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="others">Others</option>
          </select>
        </label>
        <br />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
}

export default Donate;
