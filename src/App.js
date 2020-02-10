import React, {useContext} from 'react'
//navigation
import {Switch, Route, Redirect, __RouterContext} from 'react-router-dom'
//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
//components
import Layout from './components/HOC/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Production from './pages/Production'

//animated routes

import {useTransition, animated} from 'react-spring'
import FindStuff from './pages/FindStuff';

//firebase

import firebase from './firebase'

// firebase.firestore().collection("stuff").add({
//   name: "test",
//   id: 20
// })

library.add(faShoppingCart, faChevronDown, faSearch)

function App() {

  const {location} = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0}
  })

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default App
