import React from "react";
import './Agenda.css';
import agileQaIcon from './agile-qa-practices.svg';
import autamationIcon from './automation-and-framework.png';
import ciCdIcon from './CI-and-CD.svg';
import testingIcon from './testing-techniques.png';
import introAgileIcon from './introduction-to-agile.svg';

const agendaItems = [
    { "agenda": "Introduction to Agile", "icon": introAgileIcon },
    { "agenda": "Agile QA Practices", "icon": agileQaIcon },
    { "agenda": "Testing Techniques", "icon": testingIcon },
    { "agenda": "Test Automation and Frameworks", "icon": autamationIcon },
    { "agenda": "Continuous Integration and Deployment", "icon": ciCdIcon }
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
