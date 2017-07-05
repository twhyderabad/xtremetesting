import React from "react";
import './SelectionCriteria.css';
import FAQ from './../faq/FAQ';
import submitIcon from './submit-here.svg';
import credentialsIcon from './credentials.svg';
import problemsIcon from './solve-the-problems.svg';
import replyIcon from './reply.svg';


const SelectionStep = (props) => {
    return (
        <div className="selection__step">
            <div className="icon__container">
                <span>
                    <img src={props.icon} alt="icon" className="icon"/>
                </span>
            </div>
            <div className="selection__step__desc">
                <h3 className="heading">{props.heading}</h3>
                <div className="selection__step__details">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const SelectionCriteria = () => (
    <section className="selection container">
        <h1 className="selection__heading">
            How to be part of <span className="highlight">Xtreme Testing?</span>
        </h1>

        <div className="selection__details">
            <SelectionStep icon={problemsIcon} heading="Solve these two problems">
                <FAQ question="Question 1">
                    <p>Test the website for different scenarios manually and identify defects.</p>
                    <p>We look for high priority defects found while testing the application manually. Any non functional testing defects would be an added advantage</p>
                    <ul>
                        <li>Login to the website with the following credentials - Username: admin, Password: admin</li>
                        <li>You can play around different pages and buttons to figure out the flow.</li>
                    </ul>
                </FAQ>
                <FAQ question="Question 2">
                    <p>Automate the flow mentioned below using any automation tool and programming language:</p>
                    <p>Any programming language and automation tool can be used. We mostly look for the approach used to solve the problem with an eye on the basic syntax used. Working and readable code would be an added advantage</p>
                    <ul>
                        <li> Launch the site and login. </li>
                        <li> Click on Add student</li>
                        <li> Fill Student details and click on submit button.</li>
                        <li> Verify student details in “view student details” page.</li>
                        <li> Click on “Click here” under Add Marks Tab for the added student.</li>
                        <li> In “Enter Student Marks” page Verify name,class,roll no,gender data for that particular student are coming correct.</li>
                        <li> Close the browser.</li>
                    </ul>
                </FAQ>
            </SelectionStep>
            <SelectionStep icon={credentialsIcon} heading="demo site & credentials">
                <p>
                    <a href="https://twhyderabad.github.io/demo_site/" target="_blank" rel="noopener noreferrer">https://twhyderabad.github.io/demo_site</a>
                </p>
                <p>
                    Username & Password: <b>admin</b>
                </p>
            </SelectionStep>
            <SelectionStep icon={submitIcon} heading="Submit here">
                <p>
                    <a href="mailto:xt-hyderabad@thoughtworks.com?Subject=xtremetesting solution">xt-hyderabad@thoughtworks.com</a>
                </p>
            </SelectionStep>
            <SelectionStep icon={replyIcon} heading="How do I know that I got selected?">
                <p>
                    <b>Once you submit the code, we will review it and let you know via email.</b>
                </p>
            </SelectionStep>
        </div>
    </section>
);

export default SelectionCriteria;
