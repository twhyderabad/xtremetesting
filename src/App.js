import React from 'react';
import Header from './header/Header';
import Banner from './banner/Banner';
import EventSchedule from './eventschedule/EventSchedule';
import FAQs from './faq/FAQs';

const App = () => (
    <div>
        <Header />
        <Banner />
        <FAQs />
        <EventSchedule />
    </div>
);

export default App;
