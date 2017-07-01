import React from 'react';
import './About.css';
import image1 from './1.png';
import image2 from './4.png';
import image3 from './9.png';

const About = () => (
    <section className="container about" id="about">
        <div className="desc">
            <h1 className="section-heading">
                About the event
            </h1>
            <p>
                ThoughtWorks Hyderabad is glad to announce a free-for-all Extreme Testing for Quality Analysts camp. It is a 2-day
                course with hands on exercises, designed to build a community of quality analysts who practice agile methodologies in software testing life cycle.
            </p>
            <p>
                This course will help quality analysts gain hands-on experience on Agile Testing Methodologies which can help in delivering quality software.
            </p>
        </div>
        <div className="images">
            <img className="col-100" src={image3} alt="xtreme testing gallery"/>
            <img className="col-50" src={image2} alt=""/>
            <img className="col-50" src={image1} alt=""/>
        </div>
    </section>
);

export default About;