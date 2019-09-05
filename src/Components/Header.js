import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <h1>My Contact Book</h1>
                <nav>
                    <NavLink to="/add-contact">Add Contact</NavLink>
                    <NavLink to="/contact-list">Contact List</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Header;