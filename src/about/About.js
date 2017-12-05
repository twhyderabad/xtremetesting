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
                Enthusiasts from TW Hyderabad are back again to host another much awaited Advanced
                session on Xtreme Testing and are reaching out to the XT participants from previous sessions.
                Like before this is a 2-day course with hands-on, covering Business-Driven Test with flavour of API,
                Performance Testing and a few daily practices around security testing.
            </p>
            <p>
                For those of you who have not received the invite/missed the previous sessions(conducted earlier this
                year), keep watching out this space, as we will be coming back in a few months with next Basic XT session
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