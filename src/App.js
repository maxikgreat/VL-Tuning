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
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
//components
import Layout from './components/HOC/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Production from './pages/Production'
import PrivatePolicy from './pages/PrivatePolicy'
//animated routes

import FindStuff from './pages/FindStuff';
import Order from './pages/Order'
//TODO ADD FIREBASE
//re-renders
//remove IN PRODUCTION
import whyDidYouRender from '@welldone-software/why-did-you-render'

// firebase.firestore().collection("stuff").add({
//   name: "test",
//   id: 20
// })

library.add(faShoppingCart, faChevronDown, faSearch, faPlus, faMinus, faTimesCircle,
    faCloudSun, faBolt, faCar, faTrashAlt, faPhoneSquareAlt, faEnvelope)

function App() {

  if (process.env.NODE_ENV === 'development'){
    whyDidYouRender(React);
  }
  

  // const {location} = useContext(__RouterContext)
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0},
  //   enter: { opacity: 1},
  //   leave: { opacity: 0}
  // })

  return (
    <>
      {/* <Layout>
        {transitions.map(({item, props, key}) => (
            <animated.div key = {key} style = {props}> 
              <Switch location = {item}>
                <Route path = '/' exact component = {Home}/>
                <Route path = '/quick-search' component = {FindStuff} />
                <Route path = '/production/:typeStuff' component = {Production} />
                <Route path = '/about-us' component = {AboutUs} />
                <Redirect to = '/' />
              </Switch>
            </animated.div>
        ))}
      </Layout> */}
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
