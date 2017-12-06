import React from "react";
import './Agenda.css';
import perfTest from './performance-testing.png';
import autamationIcon from './automation-and-framework.png';
import securityTest from './security-testing.jpg';

const agendaItems = [
    { "agenda": "Business Driven Testing", "icon": autamationIcon },
    { "agenda": "Performance Testing", "icon": perfTest },
    { "agenda": "Basics of Security Testing", "icon": securityTest },
];

const Agenda = () => (
    <section className="agenda container" id="agenda">
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
