import React from 'react';
import './Schedule.css';

const schedule = [
    "Introduction to Agile",
    "Agile QA Practices",
    "Testing Techniques",
    "Test Automation and Frameworks",
    "Continuous Integration and Deployment"
];

const Schedule = () => (
    <section className="schedule" id="schedule">
        <h1 className="section-heading">Schedule</h1>
        {
            schedule.map((title, key) =>
                <p key={key}>{title}</p>)
        }
    </section>
);

export default Schedule;
