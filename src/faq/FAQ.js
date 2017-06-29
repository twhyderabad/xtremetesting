import React, { Component } from "react";
import PropTypes from "prop-types";
import './faq.css';

export default class Question extends Component {
    constructor() {
        super();
        this.displayDes = this.displayDes.bind(this);
        this.closeDes = this.closeDes.bind(this);
        this.state = { "showDesc": false };
    }

    displayDes() {
        this.setState({ "showDesc": true });
    }

    closeDes() {
        this.setState({ "showDesc": false });
    }

    render() {
        return(
            <div className="faq">
                <div className={this.state.showDesc ? "question active" : "question"}>
                    {this.props.faq.question}
                    {
                        this.state.showDesc ?
                            <button className="close" onClick={this.closeDes}> - </button>
                            : <button className="open" onClick={this.displayDes}> + </button>
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