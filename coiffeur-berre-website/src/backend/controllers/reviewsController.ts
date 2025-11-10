import { Request, Response } from 'express';
import Review from '../models/review';

class ReviewsController {
    async getReviews(req: Request, res: Response) {
        try {
            const reviews = await Review.find();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching reviews' });
        }
    }

    async addReview(req: Request, res: Response) {
        const { name, rating, comment } = req.body;

        const newReview = new Review({
            name,
            rating,
            comment,
        });

        try {
            const savedReview = await newReview.save();
            res.status(201).json(savedReview);
        } catch (error) {
            res.status(400).json({ message: 'Error adding review' });
        }
    }
}

export default new ReviewsController();