import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AddContact } from "./Redux/state";
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} AddContact={AddContact} />
    </BrowserRouter>, document.getElementById('root'));
}