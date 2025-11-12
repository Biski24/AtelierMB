'use client';

import { useState } from 'react';
import { reviews as initialReviews } from '@/data/reviews';
import type { Review } from '@/types/content';
import ReviewForm from './ReviewForm';

export default function ReviewsSection() {
  const [items, setItems] = useState<Review[]>(initialReviews);
  const displayedReviews = items.slice(0, 4);

  return (
    <section id="reviews" className="section container reviews-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Avis clients</p>
          <h2>Ils recommandent Atelier MB</h2>
          <p className="small">Derniers témoignages reçus au salon.</p>
        </div>
      </div>
      <div className="reviews-grid">
        <div className="reviews-list">
          {displayedReviews.map((review) => (
            <article key={review.id} className="card review-card">
              <div className="review-rating">{'★'.repeat(review.rating)}</div>
              <p>{review.content}</p>
              <p className="review-meta">
                {review.author} — {review.service} — {review.date}
              </p>
            </article>
          ))}
        </div>
        <article className="card review-form-card">
          <p className="eyebrow">Partager son expérience</p>
          <h3>Laissez un message</h3>
          <ReviewForm
            onSubmit={(review) => {
              setItems((current) => [review, ...current]);
            }}
          />
        </article>
      </div>
    </section>
  );
}
