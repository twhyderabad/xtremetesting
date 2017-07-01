import React, { Component } from "react";
import PropTypes from "prop-types";
import './faq.css';

export default class Question extends Component {
    constructor() {
        super();
        this.toggleFaqDesc = this.toggleFaqDesc.bind(this);
        this.state = { "showDesc": false };
    }

    toggleFaqDesc() {
        this.setState(state => ({ "showDesc": !state.showDesc }));
    }

    render() {
        return(
            <div className="faq">
                <div className={this.state.showDesc ? "question active" : "question"} onClick={this.toggleFaqDesc}>
                    {this.props.faq.question}
                    {
                        this.state.showDesc ?
                            <button className="close"> - </button>
                            : <button className="open"> + </button>
                    }
                </div>
                <div className= {this.state.showDesc ? "description": "hide description"}>{this.props.faq.desc}</div>
            </div>
        );
    }
}

Question.PropTypes = {
    "faq": PropTypes.object
};