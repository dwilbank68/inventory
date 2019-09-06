import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import Firebase, { FirebaseContext } from './components/firebase/index.js';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);