import React, { useState, useEffect } from 'react';

const Calendar = () => {
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    useEffect(() => {
        // Fetch available slots from the backend
        const fetchAvailableSlots = async () => {
            try {
                const response = await fetch('/api/appointments/available-slots');
                const data = await response.json();
                setAvailableSlots(data.slots);
            } catch (error) {
                console.error('Error fetching available slots:', error);
            }
        };

        fetchAvailableSlots();
    }, []);

    const handleSlotSelect = (slot: string) => {
        setSelectedSlot(slot);
    };

    return (
        <div className="calendar">
            <h2>Available Appointment Slots</h2>
            <ul>
                {availableSlots.map((slot) => (
                    <li key={slot} onClick={() => handleSlotSelect(slot)} className={selectedSlot === slot ? 'selected' : ''}>
                        {slot}
                    </li>
                ))}
            </ul>
            {selectedSlot && <p>You have selected: {selectedSlot}</p>}
        </div>
    );
};

export default Calendar;