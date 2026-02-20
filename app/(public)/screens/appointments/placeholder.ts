// Placeholder for appointments screen
export interface Appointment {
    id: string;
    title: string;
    date: Date;
    time: string;
    description?: string;
}

export const appointmentsPlaceholder: Appointment[] = [
    {
        id: '1',
        title: 'Doctor Appointment',
        date: new Date('2024-01-15'),
        time: '10:00 AM',
        description: 'Regular checkup',
    },
    {
        id: '2',
        title: 'Team Meeting',
        date: new Date('2024-01-16'),
        time: '2:00 PM',
        description: 'Project discussion',
    },
];