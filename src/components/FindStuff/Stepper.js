import React, {PureComponent} from 'react'
import Step from '../FindStuff/Step'
import Lock from '../FindStuff/Lock'
import { connect } from 'react-redux'


class Stepper extends PureComponent{

    render(){
        const {choseStuff} = this.props
        return(
            <div className = "wrapperFindStuff" style = {{backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <div className = "stepperContainer text-center">
                  <div className = "col-4 col-xs-12 wrapper">
                      <Step 
                          type = 'stuff' 
                      />
                  </div>
                  <div className = "col-4 col-xs-12 wrapper locked">
                      {choseStuff.stuff !== "" ? 
                          <Step 
                              type = 'brand' 
                          /> : <Lock />}
                  </div>
                  <div className = "col-4 col-xs-12 wrapper locked">
                      {choseStuff.brand !== "" ? 
                          <Step 
                              type = 'model' 
                          /> : <Lock /> }
                  </div>
              </div>
             </div>
      )
    }
}

function mapStateToProps(state){
    return{
        choseStuff: state.choseStuff
    }
}

export default connect(mapStateToProps, null)(Stepper)