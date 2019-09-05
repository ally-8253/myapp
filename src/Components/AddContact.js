import React from 'react';
import './AddContact.css';
import { declareExportAllDeclaration } from '@babel/types';

function AddContact() {
    let newContactName = React.createRef();
    let newContactPhone = React.createRef();

    let addContact = () => {
        let name = newContactName.current.value;
        let phone = newContactPhone.current.value;
        alert(name + phone);
    };

    return (
        <div className="add-contact">
            <div className="container">
                <form>
                    <input ref={newContactName} id="name" placeholder="Enter name of contact" />
                    <input ref={newContactPhone} id="phone" placeholder="Enter phone number of contact" />
                </form>
                <button onClick={addContact} className="add-contact-btn">Add contact</button>
            </div>
        </div>
    );
}

export default AddContact;