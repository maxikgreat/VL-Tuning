import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import MobileStep from "./MobileStep"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Lock from "../FindStuff/Lock"


class StepperMobile extends PureComponent{

    state = {
        stepList: ["stuff", "brand", "model"],
        currentStep: 0
    }

    prevStep = () => {
        if(this.state.currentStep >= 1){
            this.setState({
                currentStep: this.state.currentStep - 1
            })
        }
    }

    nextStep = () => {
        if(this.state.currentStep <= 1){
            this.setState({
                currentStep: this.state.currentStep + 1
            })
        }
    }

    render(){
        const {choseStuff} = this.props
        return(
            <>
                <div className = "wrapperFindStuffMobile" style = {{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                        <MobileStep
                            type = 'stuff'
                        />
                        {choseStuff.stuff !== "" ?
                            <MobileStep
                                type = 'brand'
                            /> : <Lock />}
                        {choseStuff.brand !== "" ?
                            <MobileStep
                                type = 'model'
                            /> : <Lock /> }
                </div>
                <div className = "arrowsContainer">
                    <FontAwesomeIcon icon = "angle-double-left" onClick = {() => {this.prevStep()}}/>
                    <FontAwesomeIcon icon = "angle-double-right" onClick = {() => {this.nextStep()}}/>
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