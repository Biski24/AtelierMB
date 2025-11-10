import React, { useEffect, useState } from 'react';

type Review = {
    _id?: string;
    id?: string;
    name: string;
    comment: string;
    rating: number;
};

const ReviewsList: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/reviews');
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="reviews-list card">
            <h2>Ils nous font confiance</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, index) => {
                        const safeRating = Math.min(5, Math.max(1, Math.round(review.rating || 5)));
                        return (
                            <li key={review._id || review.id || index}>
                                <p className="review-author">{review.name}</p>
                                <p>{review.comment}</p>
                                <span className="review-rating">
                                    {'★'.repeat(safeRating)}
                                    {'☆'.repeat(5 - safeRating)}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Aucun avis pour le moment. Soyez le premier à partager votre expérience.</p>
            )}
        </div>
    );
};

export default ReviewsList;
