import React, {Component} from 'react'
import Step from '../FindStuff/Step'
import Lock from '../FindStuff/Lock'
import { connect } from 'react-redux'


class Stepper extends Component{

    // const [stuff, setStuff] = useState(["Ветровики", "Ветровики Хром", "Мухобойки", "Спойлера"]) //default always
    // const [brands, setBrands] = useState(["Example brand1", "Example brand2"])
    // const [models, setModels] = useState(["Example model1", "Example model2"])


    // state = {
    //     stuff: ["Ветровики", "Ветровики Хром", "Мухобойки", "Спойлера"],
    //     brands: ["Example brand1", "Example brand2"],
    //     models: ["Example model1", "Example model2"]
    // }

    // changeStuffState = (newValue) => {
    //     this.setState({
    //         stuff: newValue
    //     })
    // }

    // changeBrandState = (newValue) => {
    //     this.setState({
    //         brands: newValue
    //     })
    // }

    // changeModelsState = (newValue) => {
    //     this.setState({
    //         models: newValue
    //     })
    // }


    render(){

        const {choseStuff} = this.props

        return(
            <div className = "d-flex flex-column w-100" style = {{backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <div className = "stepperContainer row text-center">
                  <div className = "col-4 wrapper">
                      <Step 
                          type = 'stuff' 
                          index = {1} 
                      />
                  </div>
                  <div className = "col-4 wrapper locked">
                      {choseStuff.stuff !== "" ? 
                          <Step 
                              type = 'brand' 
                              index = {2}
                          /> : <Lock />}   
                  </div>
                  <div className = "col-4 wrapper locked">
                      {choseStuff.brand !== "" ? 
                          <Step 
                              type = 'model' 
                              index = {3}
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