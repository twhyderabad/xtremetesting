import React from 'react';
import './Banner.css';
import location from './../images/location.svg';
import calendarIcon from './calendar.svg';
import unlinkIcon from './link.svg';
import submitIcon from './../selectionCriteria/submit-here.svg';

const Banner = () => (
    <section className="banner">
        <h1>Xtreme Testing</h1>
        <h3>for Quality Analysts</h3>
        <div>
            <span className="date xs-full">
                <img src={calendarIcon} alt="Date and time" className="icon" />
                <date>August 5th & 6th, 2017</date>
            </span>
            <a href="https://goo.gl/maps/TnKNhCYYKkE2" className="location xs-full" target="_blank" rel="noopener noreferrer">
                <img src={location} alt="location" className="icon" />
                <span>ThoughtWorks, Hyderabad</span>
            </a>
        </div>
        <div className="button-group">
            <a className="button strike">
                <img src={unlinkIcon} alt="link" className="icon" />
                Register now
            </a>
            & &nbsp;
            <a className="button submit-here strike">
                <img src={submitIcon} alt="link" className="icon" />
                Submit here
            </a>
        </div>
    </section>
);

export default Banner;