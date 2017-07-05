import React from "react";
import './SelectionCriteria.css';

const SelectionCriteria = () => (
    <section className="selection container">
        <h1 className="section-heading">What is the Selection Criteria?</h1>
        <p>
            Selection will be based on assessment of your solution to the given problems. There are two problems solve any one of the problem.
        </p>
        <p>
            By design, the difficulty level of the problem will be low. It will test your basic testing skills and commitment to finish a given task (hopefully, implying the commitment to finish the course).
        </p>
        <a href="https://twhyderabad.github.io/demo_site/" target="_blank" rel="noopener noreferrer">Here is the Demo site to test</a> Username: admin, Password: admin

        <p>
            Send your answers to <a href="mailto:xt-hyderabad@thoughtworks.com?Subject=xtremetesting solution">xt-hyderabad@thoughtworks.com</a>
        </p>

        <h3><u> Question 1 </u></h3>
        <p>Test the website for different scenarios manually and identify defects.</p>
        <p>We look for high priority defects found while testing the application manually. Any non functional testing defects would be an added advantage</p>
        <ul>
            <li>Login to the website with the following credentials - Username: admin, Password: admin</li>
            <li>You can play around different pages and buttons to figure out the flow.</li>
        </ul>

        <br />

        <h3><u> Question 2 </u></h3>
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

    </section>
);

export default SelectionCriteria;
