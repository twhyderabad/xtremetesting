import React, { Component } from "react";
import FAQ from "./FAQ";

export default class FAQs extends Component {

    render() {
        const faqs = [
            {
                "question": "Who can apply?",
                "desc": `The Xtreme Testing concepts are not related to any tools.
                    But some of the concepts and hands-on are explained using examples in Selenium with JAVA.
                    With this we also expect you to have atleast 3+ years of testing experience in manual and know the basics of automation testing.\n                It is NOT restricted to only Hyderabadis.
                    If you can manage your own travel and stay, you are most welcome to apply.`
            },
            {
                "question": "What is the Selection Criteria",
                "desc": `Selection will be based on assessment of your solution to the given problems.\n
                    There are two problems in the link given below.\n You can use any programming language/automation tool of your liking to solve it and submit your solution as per the given guidelines.
                    By design, the difficulty level of the problem will be low. It will test your basic testing skills and commitment to finish a given task (hopefully, implying the commitment to finish the course).`
            },
            {
                "question": "Why Free?",
                "desc": `Well, we have been active evangelists of these testing practices for many years.
                    Today we are very happy to see that there is increased interest and awareness of these testing concepts across India and in Hyderabad as well.
                    However, we feel that there is a big gap in the understanding and appreciation of these practices.
                    We would like to share our knowledge to build community around these practices.`
            }
        ];

        const questions = faqs.map((faq, index) => <FAQ key={index} faq={faq} />);

        return (
            <section className="container faqs">
                {questions}
            </section>
        )
    }
}