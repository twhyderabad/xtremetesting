import React from 'react';
import './Header.css';
import logo from './logo-xt.png';

const navLinks = [
    { "name": "About", "link": "#about" },
    { "name": "Gallery", "link": "#gallery" },
    { "name": "Schedule", "link": "#schedule" },
    { "name": "Contact", "link": "#contact" }
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
                    <a href={nav.link}>{nav.name}</a>
                ))
            }
        </nav>
    </header>
);

export default Header;