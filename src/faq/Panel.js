import React, { Component } from "react";
import QA from "./QA";

export default class Panel extends Component {

    render() {
        const faqs = [
            { "que": "Who can apply?", "des": "The Xtreme Testing concepts are not related to any tools1" },
            { "que": "Who can apply?", "des": "The Xtreme Testing concepts are not related to any tools2" },
            { "que": "Who can apply?", "des": "The Xtreme Testing concepts are not related to any tools3" },
            { "que": "Who can apply?", "des": "The Xtreme Testing concepts are not related to any tools4" }
        ];

        const questions = faqs.map((faq, index) => {
            return(
              <QA key={index} qa={faq}/>
            );
        });

        return (
            <div>
                <div>Questions</div>
                <div>FAQ</div>
                {questions}
            </div>
        )
    }
}