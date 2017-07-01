import React from "react";
import Day from "./Day";
import clipboard from "./clipboard-with-pencil-.svg";
import abhilash from "./abhilash-t.jpg";
import nalini from "./nalini-t.jpg";
import spoonandfork from "./spoon-and-fork-crossed.svg";
import ram from "./ram-t.jpg";
import shiv from "./shiv-t.jpg";
import scheduleIcon from "./noun_1000573_cc.svg";
import cup from "./cup-of-hot-chocolate.svg";
import './EventSchedule.css';

const day1 = [
    {"image": clipboard, "time": "09.30AM", "topic": "Registrations" , "name": ""},
    {"image": abhilash, "time": "10.00AM", "topic": "Keynote" , "name": "Ramesh Baskarasubramanian"},
    {"image": nalini, "time": "10.15AM", "topic": "Dockerize the Tests" , "name": "Nalinikanth Meesala"},
    {"image": cup, "time": "10.55AM", "topic": "Coffee Break" , "name": ""},
    {"image": shiv, "time": "11.10AM", "topic": "Pyramidarize your Tests" , "name": "Shivaling Sannalli"},
    {"image": spoonandfork, "time": "01.00PM", "topic": "Lunch Break" , "name": ""},
    {"image": ram, "time": "02.00PM", "topic": "Test Framework Designs" , "name": "Ramprasad Yadav"},
    {"image": ram, "time": "04.00PM", "topic": "Test Framework Designs" , "name": "Ramprasad Yadav"}
];

const day2 = [
    {"image": clipboard, "time": "09.30AM", "topic": "Registrations" , "name": ""},
    {"image": abhilash, "time": "10.00AM", "topic": "Keynote" , "name": "Ramesh Baskarasubramanian"},
    {"image": nalini, "time": "10.15AM", "topic": "Dockerize the Tests" , "name": "Nalinikanth Meesala"},
    {"image": cup, "time": "10.55AM", "topic": "Coffee Break" , "name": ""},
    {"image": shiv, "time": "11.10AM", "topic": "Pyramidarize your Tests" , "name": "Shivaling Sannalli"},
    {"image": spoonandfork, "time": "01.00PM", "topic": "Lunch Break" , "name": ""},
    {"image": ram, "time": "02.00PM", "topic": "Test Framework Designs" , "name": "Ramprasad Yadav"},
    {"image": ram, "time": "04.00PM", "topic": "Test Framework Designs" , "name": "Ramprasad Yadav"}
];

const EventSchedule = () => (
    <section className="event-schedule container" id="schedule">
        <h1 className="section-heading">Event Schedule</h1>
        <div className="event-schedule__details">
            <Day scheduleIcon={scheduleIcon} day={1} date={"Aug 5, 2017"} schedule={day1}/>
            <Day scheduleIcon={scheduleIcon} day={2} date={"Aug 6, 2017"} schedule={day2}/>
        </div>
    </section>
);

export default EventSchedule;
