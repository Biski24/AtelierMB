import { Appointment } from '../models/appointment';

const workingHours = {
    Tuesday: { start: 9, end: 19 },
    Wednesday: { start: 9, end: 19 },
    Thursday: { start: 9, end: 19 },
    Friday: { start: 9, end: 19 },
    Saturday: { start: 9, end: 19 },
};

export const isAvailable = (date: Date): boolean => {
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const hour = date.getHours();

    if (workingHours[day]) {
        const { start, end } = workingHours[day];
        return hour >= start && hour < end;
    }
    return false;
};

export const getAvailableSlots = (date: Date): string[] => {
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const availableSlots: string[] = [];

    if (workingHours[day]) {
        const { start, end } = workingHours[day];
        for (let hour = start; hour < end; hour++) {
            availableSlots.push(`${hour}:00`);
        }
    }
    return availableSlots;
};

export const checkAppointmentAvailability = async (date: Date): Promise<boolean> => {
    if (!isAvailable(date)) {
        return false;
    }

    const appointments = await Appointment.find({ date });
    return appointments.length === 0;
};