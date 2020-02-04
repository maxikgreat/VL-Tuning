import React, {Component} from 'react'
import {connect} from 'react-redux'

//redux
import {setBrand, setModel, setStuff} from '../../redux/choseStuff/choseStuffAction'

class DropdownList extends Component {

    state = {
        brands: ["Audi", "BMW", "Chevrolet", "Mercedes-Benz", "Cherry", "Mazda", "Ford", "Volvo"],
        models: ["Audi 100 2000-2005", "BMW M2 Coupe", "Chevrolet Aveo 2003", "Mercedes-Benz W123", "Cherry Tiggo 3", "Mazda 323 2001", "Ford Mustang 2017", "Volvo XC70"],
        stuff: ["Ветровики", "Мухобойки", "Спойлера", "Реснички"],
        itemsValue: [],
        setItem: null
    }

    //todo: enter click

    componentDidMount(){
        switch(this.props.valueType){
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


    renderItems = () => {
        return this.state.itemsValue.map((item, index) => {
            return(
                <li 
                    key ={index}
                    onClick = {() => {this.onClickItem(item)}}
                >{item}</li>
            )
        })
    }

    onInputForm = () => {
        this.dropdown.classList.add('open')
        let inputValue = this.inputField.value.toLowerCase();
        if (inputValue.length > 0) {
            for (let j = 0; j < this.state.itemsValue.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === this.state.itemsValue[j].substring(0, inputValue.length).toLowerCase())) {
                    this.dropdown.children[j].classList.add('closed');
                } else {
                    this.dropdown.children[j].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < this.dropdown.children.length; i++) {
                this.dropdown.children[i].classList.remove('closed');
            }
        }
    }

    onClickItem = (item) => {
        this.inputField.value = item;

        for (let dropdownItem of this.dropdown.children){
            dropdownItem.classList.remove('closed');
        };

        this.state.setItem(item)
        
    }

    onFocusInput = () => {
        this.inputField.value = ""
        this.inputField.placeholder = 'Type to filter';
        this.dropdown.classList.add('open');
        for (let dropdownItem of this.dropdown.children){
            dropdownItem.classList.remove('closed');
        }
    }

    onBlurInput = () => {
        this.inputField.placeholder = 'Select option';
        this.dropdown.classList.remove('open');
    }

    render(){
        return(
            <form>
                <input 
                    disabled = {this.props.disabled}
                    className={"chosen-value" + (this.props.disabled ? " disabled" : "")} 
                    type="text" 
                    placeholder="Type to filter" 
                    onInput = {() => {this.onInputForm()}}
                    onFocus = {() => {this.onFocusInput()}}
                    onBlur = {() => {this.onBlurInput()}}
                    ref = {(inputRef) => {this.inputField = inputRef}}
                />
                
                <ul 
                    className="value-list"
                    ref = {(dropdownRef) => this.dropdown = dropdownRef}
                >
                    {this.renderItems()}
                </ul>
            </form>
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

export default connect(null, mapDispatchToProps)(DropdownList)