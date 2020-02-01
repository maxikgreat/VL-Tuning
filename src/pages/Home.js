import React, {Component, Suspense, lazy} from 'react'

import {connect} from 'react-redux'

import {clearAll} from '../redux/choseStuff/choseStuffAction'

//import Loader from '../components/UI/Loader';
import StartLaunch from '../components/StartLaunch'
//lazy load
// const StartLaunch = lazy(() => import('../components/StartLaunch'));
// const FindStuff = lazy(() => import('../components/FindStuff'));



class Home extends Component {

    state = {
        isClicked: false
    }

    showFindStuff = () => {

        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return(
            <>
                <StartLaunch 
                    //goFindStuff = {this.showFindStuff}
                />
            </>
        )
    }
}


function mapDispatchToProps(dispatch){
    return{
        clearAll: () => dispatch(clearAll())
    }
}

export default connect(null, mapDispatchToProps)(Home)