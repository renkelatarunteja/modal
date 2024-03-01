import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.email || !formData.phone || !formData.dob) {
      alert('Please fill in all fields');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (formData.phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const currentDate = new Date();
    const dobDate = new Date(formData.dob);
    if (dobDate > currentDate) {
      alert('Invalid date of birth.');
      return;
    }

    // Submit logic goes here
    // For this example, let's just reset the form data and close the modal
    setFormData({
      username: '',
      email: '',
      phone: '',
      dob: '',
    });
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Form</h2>
            <form>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Date of Birth"
              />
              <button type="button" className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
