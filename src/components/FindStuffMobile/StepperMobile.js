import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import MobileStep from "./MobileStep"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Lock from "../FindStuff/Lock"


class StepperMobile extends PureComponent{

    render(){
        const {choseStuff} = this.props
        return(
            <>
                <div className = "wrapperFindStuffMobile" style = {{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                        <MobileStep
                            type = 'stuff'
                            index = {1}
                        />
                        {choseStuff.stuff !== "" ?
                            <MobileStep
                                type = 'brand'
                                index = {2}
                            /> : <Lock />}
                        {choseStuff.brand !== "" ?
                            <MobileStep
                                type = 'model'
                                index = {3}
                            /> : <Lock /> }
                </div>
                <div className = "arrowsContainer">
                    <FontAwesomeIcon icon = "angle-double-left"/>
                    <FontAwesomeIcon icon = "hand-point-up" />
                    <FontAwesomeIcon icon = "angle-double-right"/>
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        choseStuff: state.choseStuff
    }
}

export default connect(mapStateToProps, null)(StepperMobile)