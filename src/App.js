import React from 'react';
import Header from './header/Header';
import Banner from './banner/Banner';
import Seats from './seats/Seats';
import EventSchedule from './eventschedule/EventSchedule';
import FAQs from './faq/FAQs';
import Footer from './footer/Footer';

const App = () => (
    <div>
        <Header />
        <Banner />
        <Seats />
        <FAQs />
        <EventSchedule />
        <Footer />
    </div>
);

export default App;
