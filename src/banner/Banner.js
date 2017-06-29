import React from 'react';
import './Banner.css';
import location from './location.svg';

const Banner = () => (
    <section className="banner">
        <h1>Xtreme Testing</h1>
        <h3>for Quality Analysts</h3>
        <div>
            <span className="date">
                <img src={location} alt="Date and time" className="icon" />
                <date>August 5th & 6th, 2017</date>
            </span>
            <span className="location">
                <img src={location} alt="location" className="icon" />
                <span>ThoughtWorks, Hyderabad</span>
            </span>
        </div>
        <button className="register">
            <img src={location} alt="link" className="icon" />
            Register now
        </button>
    </section>
);

export default Banner;