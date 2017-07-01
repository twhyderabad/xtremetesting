import React from 'react';
import './Banner.css';
import location from './../images/location.svg';
import calendarIcon from './calendar.svg';
import unlinkIcon from './link.svg';

const Banner = () => (
    <section className="banner">
        <h1>Xtreme Testing</h1>
        <h3>for Quality Analysts</h3>
        <div>
            <span className="date xs-full">
                <img src={calendarIcon} alt="Date and time" className="icon" />
                <date>August 5th & 6th, 2017</date>
            </span>
            <span className="location xs-full">
                <img src={location} alt="location" className="icon" />
                <span>ThoughtWorks, Hyderabad</span>
            </span>
        </div>
        <button className="register">
            <img src={unlinkIcon} alt="link" className="icon" />
            Register now
        </button>
    </section>
);

export default Banner;