import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import MobileStep from "./MobileStep"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Lock from "../FindStuff/Lock"


class StepperMobile extends PureComponent{


    constructor(props) {
        super(props);
        this.stepperContainer = React.createRef();
    }

    changePosX = (scale) => {
        let nodeWidth = this.stepperContainer.current.offsetWidth
        setTimeout(() => {
            this.stepperContainer.current.scroll({
                top:0,
                left: nodeWidth * scale,
                behavior: "smooth"
            })
        }, 200)

    }

    render(){
        const {choseStuff} = this.props
        return(
            <>
                <div
                    ref = {this.stepperContainer}
                    className = "wrapperFindStuffMobile"
                    style = {{backgroundColor: 'rgba(0,0,0,0.7)'}}
                >
                        <MobileStep
                            type = 'stuff'
                            index = {1}
                            changePosX = {this.changePosX}
                        />
                        {choseStuff.stuff !== "" ?
                            <MobileStep
                                type = 'brand'
                                index = {2}
                                changePosX = {this.changePosX}
                            /> : <Lock />}
                        {choseStuff.brand !== "" ?
                            <MobileStep
                                type = 'model'
                                index = {3}
                                changePosX = {this.changePosX}
                            /> : <Lock /> }
                </div>
                {/*<div className = "arrowsContainer">*/}
                {/*    <FontAwesomeIcon icon = "angle-double-left"/>*/}
                {/*    <FontAwesomeIcon icon = "hand-point-up" />*/}
                {/*    <FontAwesomeIcon icon = "angle-double-right"/>*/}
                {/*</div>*/}
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