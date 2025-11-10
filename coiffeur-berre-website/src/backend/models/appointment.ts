import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentTime: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        default: '',
    },
}, {
    timestamps: true,
});

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;