import React from 'react';
import './About.css';
import image1 from './1st-image.jpg';
import image2 from './4.png';
import image3 from './9.png';

const About = () => (
    <section className="container about" id="about">
        <div className="desc">
            <h1 className="section-heading">
                About the event
            </h1>
             <p>
                Advanced - Xtreme Testing (XT), is being hosted again by enthusiasts from ThoughtWorks, Hyderabad. This
                session is primarily focused on providing in-depth knowledge on topics covered from previous
                introductory sessions of Xtreme Testing. The topics have been chosen based on the feedback received.
            </p><p>
                Like before this is a 2-day course with hands-on, covering Behaviour-Driven Testing, Service Layer Testing,
                Performance Testing and a few crucial yet daily practices that we should adopt around security testing.
            </p>
            <p>
                For those of you who have not received the invite/missed the previous sessions conducted earlier this
                year, keep watching out this space, as we will be coming back in a few months with next Basic XT session
                and we look forward to your eager participation.
            </p>
        </div>
        <div className="images">
            <img className="col-100 full-image" src={image1} alt="xtreme testing gallery"/>
            <img className="col-50" src={image2} alt=""/>
            <img className="col-50" src={image3} alt=""/>
        </div>
    </section>
);

export default About;