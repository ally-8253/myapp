import React from 'react';
import './ContactList.css';
import ContactLine from './ContactLine';

function ContactList(props) {
    let ContactsElements = props.contacts.map(contact => <ContactLine name={contact.name} phone={contact.phone} id={contact.id} />);
    return (
        <div className="contact-list">
            <div className="container">
                {ContactsElements}
            </div>
        </div>
    );
}

export default ContactList;