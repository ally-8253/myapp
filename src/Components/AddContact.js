import React from 'react';
import './AddContact.css';

function AddContact() {
    return (
        <div className="add-contact">
            <div className="container">
                <form>
                    <input id="name" placeholder="Enter name of contact" />
                    <input id="phone" placeholder="Enter phone number of contact" />
                </form>
                <button className="add-contact-btn">Add contact</button>
            </div>
        </div>
    );
}

export default AddContact;