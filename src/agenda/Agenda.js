import React from "react";
import './Agenda.css';
import bddTest from './bdd-testing.png';
import serviceTest from './api-testing.png';
import perfTest from './performance-testing.png';
import securityTest from './security-testing.jpg';

const agendaItems = [
    { "agenda": "Behaviour Driven Testing", "icon": bddTest },
    { "agenda": "Service Layer Testing", "icon": serviceTest },
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
