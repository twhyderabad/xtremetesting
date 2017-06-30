import React from 'react';
import './Footer.css';
import facebook from './facebook.png';
import twitter from './twitter.png';

const Footer = () => (
    <footer className="container">
        <section className="about-tw">
            <h3>About ThoughtWorks</h3>
            <p>
                We are a software company and a community of passionate, purpose-led individuals.
                We think disruptively to deliver technology to address our clients' toughest challenges,
                all while seeking to revolutionize the IT industry and create positive social change.
            </p>
        </section>
        <section className="connect-us">
            <h3>Connect With Us</h3>
            <a href="https://www.facebook.com/ThoughtWorksHyderabad" target="_blank noreferrer noopener" title="connect via facebook">
                <img src={facebook} alt="facebook"/>
            </a>
            <a href="https://twitter.com/thoughtworks" target="_blank noreferrer noopener" title="connect via twitter">
                <img src={twitter} alt="twitter"/>
            </a>
        </section>
    </footer>
);

export default Footer;