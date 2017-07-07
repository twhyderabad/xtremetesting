import React from 'react';
import './Header.css';
import logo from './logo-xt.png';

const navLinks = [
    { "name": "About", "link": "#about" },
    { "name": "Agenda", "link": "#agenda" },
    { "name": "FAQ", "link": "#faq" },
    { "name": "Gallery", "link": "#gallery" },
    { "name": "Contact Us", "link": "#contact" }
];

const Header = () => (
    <header>
        <img
            className="logo"
             src={logo}
             alt="Xtreme Testing logo"
             title="xtremetesting"
        />
        <nav className="navigation">
            {
                navLinks.map((nav, key) => (
                    <a href={nav.link} key={key}>{nav.name}</a>
                ))
            }
        </nav>
    </header>
);

export default Header;