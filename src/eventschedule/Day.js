import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Day extends Component {
    render() {
        const data = this.props.schedule.map((event) => {
            const by = event.name != "" ? event.topic + " by "+ event.name : event.topic;

            return (<div className="event">
                <img src={event.image} className="image"/>
                <div className="time">{event.time}</div>
                <div className="topic">{by}</div>
            </div>)
        });

        return(
            <div>
                <div className="schedule-header">
                    <img src={this.props.noun} className="header-image"/>
                    <span className="day">Day{this.props.day}</span>
                    <span className="date">{this.props.date}</span>
                </div>
                {data}
            </div>
        );
    }
}

Day.PropTypes = {
    "schedule": PropTypes.array,
    "noun": PropTypes.string,
    "day": PropTypes.int,
    "date": PropTypes.string
};