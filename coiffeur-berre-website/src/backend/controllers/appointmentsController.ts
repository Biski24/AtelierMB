import { Request, Response } from 'express';
import Appointment from '../models/appointment';
import { checkAvailability } from '../services/availability';

class AppointmentsController {
    async bookAppointment(req: Request, res: Response) {
        const { date, time, customerName, service } = req.body;

        const isAvailable = await checkAvailability(date, time);
        if (!isAvailable) {
            return res.status(400).json({ message: 'Selected time is not available.' });
        }

        const appointment = new Appointment({
            date,
            time,
            customerName,
            service,
        });

        try {
            await appointment.save();
            res.status(201).json({ message: 'Appointment booked successfully!', appointment });
        } catch (error) {
            res.status(500).json({ message: 'Error booking appointment.', error });
        }
    }

    async getAppointments(req: Request, res: Response) {
        try {
            const appointments = await Appointment.find();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching appointments.', error });
        }
    }
}

export default new AppointmentsController();