import React from 'react'
//navigation
import {Switch, Route, Redirect} from 'react-router-dom'
//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faShoppingCart,
    faChevronDown,
    faSearch,
    faPlus,
    faMinus,
    faTimesCircle,
    faCloudSun,
    faBolt,
    faCar,
    faTrashAlt,
    faPhoneSquareAlt,
    faEnvelope,
    faAngleDoubleLeft,
    faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'
//components
import Layout from './components/HOC/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Production from './pages/Production'
import PrivatePolicy from './pages/PrivatePolicy'
import FindStuff from './pages/FindStuff';
import Order from './pages/Order'
//TODO ADD FIREBASE

library.add(faShoppingCart, faChevronDown, faSearch, faPlus, faMinus, faTimesCircle,
    faCloudSun, faBolt, faCar, faTrashAlt, faPhoneSquareAlt, faEnvelope, faAngleDoubleLeft, faAngleDoubleRight)

function App() {


  return (
    <>
      <Layout>
              <Switch>
                <Route path = '/' exact component = {Home}/>
                <Route path = '/quick-search' component = {FindStuff} />
                <Route path = '/production/:typeStuff' component = {Production} />
                <Route path = '/about-us' component = {AboutUs} />
                <Route path = '/order' component = {Order} />
                <Route path = '/private-policy' component = {PrivatePolicy} />
                <Redirect to = '/' />
              </Switch>
      </Layout>
    </>
  );
}

export default App
