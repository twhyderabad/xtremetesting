import React, { Component } from "react";
import PropTypes from "prop-types";
import './faq.css';

export default class Question extends Component {
    constructor() {
        super();
        this.displayDes = this.displayDes.bind(this);
        this.closeDes = this.closeDes.bind(this);
        this.state = { "showDesc": false, "showPlus": true, "showMinus": false };
    }

    displayDes() {
        this.setState({ "showDesc": true, "showMinus": true, "showPlus": false });
    }

    closeDes() {
        this.setState({ "showDesc": false, "showMinus": false, "showPlus": true });
    }

    render() {
        return(
            <div>
                <div className="question">{this.props.qa.que}</div>
                <button className={this.state.showPlus ? "open": "hide-plus open"} onClick={this.displayDes}> + </button>
                <button className={this.state.showMinus ? "show close" : "close"} onClick={this.closeDes}> - </button>
                <div className= {this.state.showDesc ? "show description": "description"}>{this.props.qa.des}</div>
            </div>
        );
    }
}

Question.PropTypes = {
    "qa": PropTypes.object
};