import { Router } from 'express';
import ReviewsController from '../controllers/reviewsController';
import AppointmentsController from '../controllers/appointmentsController';

const router = Router();

// Reviews routes
router.get('/reviews', ReviewsController.getAllReviews);
router.post('/reviews', ReviewsController.createReview);

// Appointments routes
router.get('/appointments', AppointmentsController.getAllAppointments);
router.post('/appointments', AppointmentsController.createAppointment);

export default router;