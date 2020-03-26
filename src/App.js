import React, {useEffect} from 'react'
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
    faAngleDoubleRight,
    faHandPointUp,
    faCheckCircle,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
//components
import Layout from './components/HOC/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Production from './pages/Production'
import PrivatePolicy from './pages/PrivatePolicy'
import FindStuff from './pages/FindStuff';
import Order from './pages/Order'
import Login from './pages/Login'
import AdminPanel from "./components/Admin/AdminPanel";
//redux
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fireFetch} from "./redux/dataBase/dataBaseAction";
import Loader from "./components/UI/Loader";

library.add(faShoppingCart, faChevronDown, faSearch, faPlus, faMinus, faTimesCircle,
    faCloudSun, faBolt, faCar, faTrashAlt, faPhoneSquareAlt, faEnvelope,
    faAngleDoubleLeft, faAngleDoubleRight, faHandPointUp, faCheckCircle,faExclamationCircle)

function App() {

    //const [dataLoaded, setDataLoaded] = useState(false)

    const fireDataBase = useSelector(state => state.dataBase)

    //get data from firebase
    const dispatch = useDispatch()

    useEffect(() => {
        //upload logos to static folder
        require.context('./assets/images/logos', false,  /\.(png|jpe?g|svg)$/)
        dispatch(fireFetch())
    }, [])

  return (
    <>
        {fireDataBase.isLoading ? <Loader/> :
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/quick-search' component={FindStuff}/>
                    <Route path='/production/:typeStuff' component={Production}/>
                    <Route path='/about-us' component={AboutUs}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/private-policy' component={PrivatePolicy}/>
                    <Route path='/admin' component={Login} />
                    <Redirect to='/'/>
                </Switch>
            </Layout>
        }
    </>
  );
}

export default App
