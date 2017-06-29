import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Day.css";

export default class Day extends Component {
    render() {
        const data = this.props.schedule.map((event, key) => {

            return (<div className="event" key={key}>
                <img src={event.image} className="speaker-icon" alt="speaker"/>
                <div className="details">
                    <span className="time">{event.time}</span>
                    <span className="topic">
                        {event.topic}
                        {event.name && " by "}
                        <span className="speaker">{event.name}</span>
                    </span>
                </div>
            </div>)
        });

        return(
            <div className="day-wise-schedule">
                <div className="schedule-header">
                    <img src={this.props.scheduleIcon} alt="scheduleIcon" className="header-image"/>
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