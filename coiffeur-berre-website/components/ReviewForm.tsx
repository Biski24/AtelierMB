'use client';

import { FormEvent, useState } from 'react';
import type { Review } from '@/types/content';

type Props = {
  onSubmit: (review: Review) => void;
};

export default function ReviewForm({ onSubmit }: Props) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [service, setService] = useState('Balayage');
  const [rating, setRating] = useState(5);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const review: Review = {
      id: crypto.randomUUID(),
      author,
      content,
      service,
      rating,
      date: new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(new Date()),
    };
    onSubmit(review);
    setAuthor('');
    setContent('');
    setService('Balayage');
    setRating(5);
  };

  return (
    <form className="stack" onSubmit={handleSubmit}>
      <label>
        Prénom
        <input value={author} onChange={(event) => setAuthor(event.target.value)} required />
      </label>
      <label>
        Service réalisé
        <input value={service} onChange={(event) => setService(event.target.value)} required />
      </label>
      <label>
        Note
        <select value={rating} onChange={(event) => setRating(Number(event.target.value))}>
          {[5, 4, 3, 2, 1].map((value) => (
            <option key={value} value={value}>
              {value} / 5
            </option>
          ))}
        </select>
      </label>
      <label>
        Votre avis
        <textarea value={content} onChange={(event) => setContent(event.target.value)} required />
      </label>
      <button className="btn ghost" type="submit">
        Publier mon avis
      </button>
    </form>
  );
}
