import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setBrand, setModel, setStuff} from '../../redux/choseStuff/choseStuffAction'

class RadioList extends Component{

    state = {
        brands: ["Audi", "BMW", "Chevrolet", "Mercedes-Benz", "Cherry", "Mazda", "Ford", "Volvo"],
        models: ["Audi 100 2000-2005", "BMW M2 Coupe", "Chevrolet Aveo 2003", "Mercedes-Benz W123", "Cherry Tiggo 3", "Mazda 323 2001", "Ford Mustang 2017", "Volvo XC70"],
        stuff: ["Ветровики", "Мухобойки", "Спойлера", "Реснички"],
        itemsValue: [],
        setItem: null
    }

    componentDidMount(){
        switch(this.props.type){
            case "brand":
                this.setState({
                    itemsValue: [...this.state.brands],
                    setItem: this.props.setBrand
                })
                break
            case "model":
                this.setState({
                    itemsValue: [...this.state.models],
                    setItem: this.props.setModel
                })
                break
            case "stuff":
                this.setState({
                    itemsValue: [...this.state.stuff],
                    setItem: this.props.setStuff
                })
                break
            default:
                break
        }
    }

    chooseItem = (e) => {
        this.state.setItem(e.target.value)
    }


    renderItems = () => {
        return this.state.itemsValue.map((item, index) => (
            <li key = {index}>
                <input 
                    type="radio" 
                    name={this.props.type} 
                    id = {"_id:" + item} 
                    value={item} 
                    onChange = {e => this.chooseItem(e)}

                />
                <label htmlFor={"_id:" + item}>{item}</label>
            </li>
        ))
    }

    render(){
        return(
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        setBrand: (brand) => dispatch(setBrand(brand)),
        setModel: (model) => dispatch(setModel(model)),
        setStuff: (stuff) => dispatch(setStuff(stuff))
    }
}

export default connect(null, mapDispatchToProps)(RadioList)