import React, { useState } from 'react';
import './styles.css'; // Assuming you have a CSS file for styling

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.dob || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes('@')) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const dob = new Date(formData.dob);
    if (dob > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // If all validations pass, you can handle form submission here
    // For simplicity, just resetting the form data
    setFormData({
      username: '',
      email: '',
      dob: '',
      phone: ''
    });

    // Closing the modal after successful submission
    setIsOpen(false);
  };

  return (
    <div className="app">
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div  className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>File Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange} />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" value={formData.email} onChange={handleChange} />
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" value={formData.phone} onChange={handleChange} />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} />
             
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
