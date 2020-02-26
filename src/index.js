import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
//react-redux
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import * as serviceWorker from './serviceWorker'
//styles
import 'bootstrap/dist/css/bootstrap.css'
import './scss/main.scss'

const app = 
    <Provider store = {store}>
        <Router>
          <PersistGate persistor = {persistor}>
            <App />
          </PersistGate>
        </Router>
    </Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
