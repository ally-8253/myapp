import React from 'react';
import './AddContact.css';
import { declareExportAllDeclaration } from '@babel/types';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


function AddContact(props) {
    let newContactName = React.createRef();
    let newContactPhone = React.createRef();

    let addContact = () => {
        let name = newContactName.current.value;
        let phone = newContactPhone.current.value;
        props.AddContact(name, phone);
    };

    return (
        <div className="add-contact">
            <div className="container">
                <form>
                    <input ref={newContactName} id="name" placeholder="Enter name of contact" />
                    <input ref={newContactPhone} id="phone" placeholder="Enter phone number of contact" />
                </form>
                <button onClick={addContact} className="add-contact-btn">
                    <NavLink className="navlink" to="/contact-list">Add contact</NavLink>
                </button>
            </div>
        </div>
    );
}

export default AddContact;