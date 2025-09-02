import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function GiveReviews() {
  const { doctorId } = useParams();
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(doctorId);
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0,
    });
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div style={{ 'marginTop': '60px', 'alignItems': 'center' }}>
      <form onSubmit={handleSubmit}>
        <h2>Give Your Feedback</h2>
        {showWarning && <p className='warning'>Please fill out all fields.</p>}
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='review'>Review:</label>
          <textarea
            id='review'
            name='review'
            value={formData.review}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='rating'>Rating:</label>
          <input
            type='number'
            id='rating'
            name='rating'
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
