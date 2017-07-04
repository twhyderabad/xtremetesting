import React from "react";
import FAQ from "./FAQ";

const faqs = [
    {
        "question": "Why Free?",
        "desc": `Well, we have been active evangelists of these testing practices for many years.
            Today we are very happy to see that there is increased interest and awareness of these testing concepts across India and in Hyderabad as well.
            However, we feel that there is a big gap in the understanding and appreciation of these practices.
            We would like to share our knowledge to build community around these practices.`
    }
];


const FAQs = () => (
            <section className="container faqs">
                <h1 className="section-heading">FAQ</h1>
                <FAQ question="Who can apply?">
                    <p>
                        The Xtreme Testing concepts are not related to any tools. But some of the concepts and hands-on are explained using examples in Selenium with JAVA.
                    </p>
                    <p>
                        With this we also expect you to have atleast 3+ years of testing experience in manual and know the basics of automation testing.
                    </p>
                    <p>
                        It is NOT restricted to only Hyderabadis. If you can manage your own travel and stay, you are most welcome to apply.      
                    </p>
                </FAQ>
                <FAQ question="What is the Selection Criteria?">
                    <p>
                        Selection will be based on assessment of your solution to the given problems. There are two problems in the link given below.
                    </p>
                    <p>
                         You can use any programming language/automation tool of your liking to solve it and submit your solution as per the given guidelines.
                    </p>
                    <p>
                        By design, the difficulty level of the problem will be low. It will test your basic testing skills and commitment to finish a given task (hopefully, implying the commitment to finish the course).
                    </p>
                    <a href="https://twhyderabad.github.io/demo_site/" target="_blank" rel="noopener noreferrer">Here are the Questions</a>
                    <ol>
                        <li>List down the defects observed while performing Manual Testing</li>
                        <li>Share the automation test scenarios</li>
                    </ol>
                    <p>
                        Send your answers to <a href="mailto:xt-hyderabad@thoughtworks.com?Subject=xtremetesting solution">xt-hyderabad@thoughtworks.com</a>
                    </p>
                </FAQ>
                <FAQ question="Why Free?">
                    <p>
                        Well, we have been active evangelists of these testing practices for many years. Today we are very happy to see that there is increased interest and awareness of these testing concepts across India and in Hyderabad as well.
                    </p>
                    <p>
                        However, we feel that there is a big gap in the understanding and appreciation of these practices. We would like to share our knowledge to build community around these practices.
                    </p>
                </FAQ>
            </section>
        );

export default FAQs;
