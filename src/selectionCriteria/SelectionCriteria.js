import React from "react";
import './SelectionCriteria.css';

const SelectionCriteria = () => (
    <section className="selection container">
        <h1 className="section-heading">What is the Selection Criteria?"</h1>
        <p>
            Selection will be based on assessment of your solution to the given problems. There is a demo site in the link given below.
        </p>
        <p>
            By design, the difficulty level of the problem will be low. It will test your basic testing skills and commitment to finish a given task (hopefully, implying the commitment to finish the course).
        </p>
        <a href="https://twhyderabad.github.io/demo_site/" target="_blank" rel="noopener noreferrer">Here is the Demo site to test</a>
        <ol>
            <li>Username: <b>admin</b> & Password: <b>admin</b> for the demo site</li>
            <li>List down the defects observed while performing Manual Testing</li>
            <li>Share the automation test scenarios</li>
        </ol>
        <p>
            Send your answers to <a href="mailto:xt-hyderabad@thoughtworks.com?Subject=xtremetesting solution">xt-hyderabad@thoughtworks.com</a>
        </p>
    </section>
);

export default SelectionCriteria;
