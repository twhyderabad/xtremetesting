import React from 'react';
import './Seats.css';

const totalSeats = 40;
const bookedSeats = 18;

const renderSeatsIcon = (row) => {
    const arr = [];
    for(let i = 1; i <= 10; i++) {
        arr.push(
            <i
                key={i}
                className={ (row*10 + i) <= bookedSeats ? "icon seat seat--booked" : "icon seat" }
            />
        );
    }
    return arr;
};

const Seats = () => (
    <section className="container seats">
        <div className="seats__rows">
            <div className="seats__row">
                { renderSeatsIcon(0) }
            </div>
            <div className="seats__row">
                { renderSeatsIcon(1) }
            </div>
            <div className="seats__row">
                { renderSeatsIcon(2) }
            </div>
            <div className="seats__row">
                { renderSeatsIcon(3) }
            </div>
        </div>
        <div className="seats__details">
            <div>
                <i className="icon seat" />
                Available Seats ( {totalSeats - bookedSeats} )
            </div>
            <div>
                <i className="icon seat seat--booked" />
                Booked Seats ( {bookedSeats} )
            </div>
            <div>
                <i className="icon clock" />
                27 July - Last Date for Submission
            </div>
        </div>
    </section>
);

export default Seats;