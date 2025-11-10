import React, { useState } from 'react';

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = { name, rating, comment };

        // Here you would typically send the review to your backend
        console.log('Review submitted:', review);

        // Reset form fields
        setName('');
        setRating(1);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit Your Review</h2>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Rating:</label>
                <select 
                    value={rating} 
                    onChange={(e) => setRating(Number(e.target.value))} 
                    required
                >
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>{star}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Comment:</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;