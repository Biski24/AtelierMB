export interface Review {
    id: string;
    customerName: string;
    rating: number;
    comment: string;
    date: Date;
}

export interface Appointment {
    id: string;
    customerName: string;
    date: Date;
    time: string;
    service: string;
}

export interface Availability {
    date: Date;
    availableSlots: string[];
}