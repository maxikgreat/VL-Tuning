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
//remember Scroll position
import ScrollMemory from 'react-router-scroll-memory'

const app =
    <Provider store = {store}>
        <Router>
            <ScrollMemory elementID = {"scrollModels"}/>
            <PersistGate persistor = {persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>


ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();


