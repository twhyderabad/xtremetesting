import React from 'react';
import './Location.css';
import locationIcon from './../images/location.svg';

const Location = () => (
    <section className="location container" id="contact">
        <div className="location__details">
            <h1 className="section-heading">Location</h1>
            <div>
                <img src={locationIcon} alt="location" className="icon" />
                <span>
                    ThoughtWorks Hyderabad, 3rd Floor, Above KFC, Gachibowli
                </span>
            </div>
            <div>
                <img src={locationIcon} alt="email" className="icon" />
                <a href="mailto:xt-hyderabad@thoughtworks.com">xt-hyderabad@thoughtworks.com</a>
            </div>
            <div>
                <img src={locationIcon} alt="phone" className="icon" />
                <a href="tel:+91-9052335567">+91 - 9052335567</a>
            </div>
            <div>
                <img src={locationIcon} alt="time" className="icon" />
                <span>9 AM - 5 PM</span>
            </div>
        </div>
    </section>
);

export default Location;
