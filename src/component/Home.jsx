import React, { useState } from 'react';
import './Homepage.css';
import axios from 'axios';

function TicketBooking() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    amount: '',
    arrival: '',
    depature: '',
    bus_id: '',
    phonenum: '',
    bus_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, such as booking the tickets or processing the data.
    console.log('Form data submitted:', formData);
    axios.post('http://localhost:8091/POST', formData)
  };

  return (
    <div className="container">
      <h2 id='head'>Ticket Booking Details</h2>
      <form onSubmit={handleSubmit} >
        <div className="input-group">
          <label htmlFor="name" id='na'>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Ticket Amount:</label>
          <input
            type="number"
            id="ticketAmount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="arrival">Arrival </label>
          <input
            type="text"
            id="arrivalTime"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="depature">Depature </label>
          <input
            type="text"
            id="departureTime"
            name="depature"
            value={formData.depature}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="bus_id">Bus ID:</label>
          <input
            type="text"
            id="busId"
            name="bus_id"
            value={formData.bus_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phonenum">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phonenum"
            value={formData.phonenum}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="bus_name">Bus Name:</label>
          <input
            type="text"
            id="busName"
            name="bus_name"
            value={formData.bus_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <button type="submit" className="btn">Book Tickets</button>
        </div>
      </form>
    </div>
  );
}

export default TicketBooking;
