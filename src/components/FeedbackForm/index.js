import React, { useState } from 'react';
import './feedbackform.css';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const handleClear = () => {
        setFeedback('');
        setRating(0);
    };

    const handleSubmit = () => {
        // Send the feedback and rating to the backend
        // You can make an API call here using a library like axios

        // Reset the form after submitting
        setFeedback('');
        setRating(0);
    };

    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (

        <div className="feedback-form">

            <div className="rating-div">
                <div>
                    {[1,2,3,4, 5].map((value) => (
                        <span
                            className="rating-star-span"
                        key={value}
                        onClick={() => handleRatingChange(value)}
                        style={{cursor: 'pointer', color: rating >= value ? 'gold' : 'gray'}}
                                >
                          ★
                        </span>))}
                </div>
            </div>
          <textarea
              className="review-text-area"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
          />



        <div className="button-div">
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>);
};

export default FeedbackForm;