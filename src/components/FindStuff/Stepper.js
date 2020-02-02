import React from 'react'
import Step from '../FindStuff/Step'
import Lock from '../FindStuff/Lock'
import { useSelector } from 'react-redux'

const Stepper = () => {

    const choseStuff = useSelector(state => state.choseStuff)

    
        return(
              <div className = "d-flex flex-column w-100" style = {{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                <div className = "stepperContainer row text-center">
                    <div className = "col-4 wrapper">
                        <Step type = 'brand' index = {1}/>
                    </div>
                    <div className = "col-4 wrapper locked">
                        {choseStuff.brand !== "" ? <Step type = 'model' index = {2}/> : <Lock />}   
                    </div>
                    <div className = "col-4 wrapper locked">
                        {choseStuff.model !== "" ? <Step type = 'stuff' index = {3}/> : <Lock /> }
                    </div>
                </div>
               </div>
        )
}

export default Stepper