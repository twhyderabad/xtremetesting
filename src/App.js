import React from 'react';
import Header from './header/Header';
import Banner from './banner/Banner';
import About from './about/About';
import Seats from './seats/Seats';
import Agenda from './agenda/Agenda';
import SelectionCriteria from './selectionCriteria/SelectionCriteria';
import FAQs from './faq/FAQs';
import Gallery from './gallery/Gallery';
import Location from './location/Location';
import Footer from './footer/Footer';

const App = () => (
    <div>
        <Header />
        <Banner />
        <Seats />
        <About />
        <Agenda />
        <SelectionCriteria />
        <FAQs />
        <Gallery />
        <Location />
        <Footer />
    </div>
);

export default App;
