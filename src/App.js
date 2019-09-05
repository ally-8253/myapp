import React from 'react';
import './App.css';
import Header from './Components/Header';
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="AppWrapper">
        <Header />
        <div className="content">
          <Route path="/contact-list" render={() => <ContactList contacts={props.state.contacts} />} />
          <Route path="/add-contact" render={() => <AddContact />} />
          <Route path="/edit-contact" render={() => <EditContact />} />
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
