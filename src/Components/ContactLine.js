import React from 'react';
import './ContactLine.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function ContactLine(props) {
    return (
        <div className="contact-line">
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <div className="btns">
                <NavLink to="/edit-contact">Edit</NavLink>
                <a src="#">Delete</a>
            </div>
        </div>
    );
}

export default ContactLine;