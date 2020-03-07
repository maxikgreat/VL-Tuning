import React, {PureComponent} from 'react'

import StartLaunch from '../components/Home/StartLaunch'
//lazy load




class Home extends PureComponent {

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