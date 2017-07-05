import React from "react";
import './Agenda.css';
import icon from './../images/clipboard-with-pencil-.svg';

const agendaItems = [
    { "agenda": "Introduction to Agile", "icon": icon },
    { "agenda": "Agile QA Practices", "icon": icon },
    { "agenda": "Testing Techniques", "icon": icon },
    { "agenda": "Test Automation and Frameworks", "icon": icon },
    { "agenda": "Continuous Integration and Deployment", "icon": icon }
];

const Agenda = () => (
    <section className="agenda container">
        <h1 className="section-heading clearfix">Event Agenda</h1>
        <div className="agenda__items">
        {
            agendaItems.map(({ agenda, icon }, key) => 
                <div key={key} className="agenda__item">
                    <img src={icon} alt="icon"/>
                    <span className="agenda__title">{agenda}</span>
                </div>
            )
        }
        </div>
    </section>
);

export default Agenda;
