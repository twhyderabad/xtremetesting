import React from 'react';
import './Location.css';
import locationIcon from './../images/location.svg';
import timeIcon from './../images/time.svg';
import mailIcon from './close-envelope.svg';
import phoneIcon from './phone-receiver.svg';

const Location = () => (
    <section className="location container" id="contact">
        <div className="location__details">
            <h1 className="section-heading">Location</h1>
            <div>
                <img src={locationIcon} alt="location" className="icon" />
                <a href="https://goo.gl/maps/TnKNhCYYKkE2" className="location-link" target="_blank" rel="noopener noreferrer">
                    ThoughtWorks Hyderabad,
                    <br />
                    3rd Floor, Above KFC,
                    <br />
                    Gachibowli
                </a>
            </div>
            <div>
                <img src={mailIcon} alt="email" className="icon mail" />
                <a href="mailto:xt-hyderabad@thoughtworks.com">xt-hyderabad@thoughtworks.com</a>
            </div>
            <div>
                <img src={phoneIcon} alt="phone" className="icon phone" />
                <a href="tel:+91-9052335567">+91 - 9052335567</a>
            </div>
            <div>
                <img src={timeIcon} alt="time" className="icon time" />
                <span>9 AM - 5 PM</span>
            </div>
        </div>
    </section>
);

export default Location;
