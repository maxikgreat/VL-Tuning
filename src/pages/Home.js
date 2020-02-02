import React, {Component, Suspense, lazy} from 'react'

//import Loader from '../components/UI/Loader';
import StartLaunch from '../components/Home/StartLaunch'
//lazy load
// const StartLaunch = lazy(() => import('../components/StartLaunch'));
// const FindStuff = lazy(() => import('../components/FindStuff'));



class Home extends Component {

    state = {
        isClicked: false
    }

    showRestPage = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return(
            <>
                <StartLaunch />
            </>
        )
    }
}


export default Home