import React from 'react';
import './App.css';
import Header from './Components/Header';
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="AppWrapper">
      <Header />
      <div className="content">
        <Route path="/contact-list" render={() => <ContactList contacts={props.state.contacts} />} />
        <Route path="/add-contact" render={() => <AddContact AddContact={props.AddContact} />} />
        <Route path="/edit-contact" render={() => <EditContact />} />
      </div>
    </div>
  )
}


export default App;
