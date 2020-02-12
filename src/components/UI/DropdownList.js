import React, {Component} from 'react'
import {connect} from 'react-redux'
import filter from '../../helpFunctions/filter'
import equal from 'fast-deep-equal'
import deleteEmptyBrands from '../../helpFunctions/deleteEmptyBrands'

//redux
import {setBrand, setModel, setStuff, clearModel, clearBrand} from '../../redux/choseStuff/choseStuffAction'

class DropdownList extends Component {

    state = {
        brands:[],
        models: [],
        stuff: ["Ветровики", "Ветровики Хром", "Мухобойки", "Спойлера"], //always on default
        setItem: null
    }

    updateModels = (dataBase, choseStuff) => {

        let filteredModels = []

        if(dataBase[choseStuff.stuff][choseStuff.brand] !== undefined){
            filteredModels =  dataBase[choseStuff.stuff][choseStuff.brand].data.map(item => {
                return item.Name
            })
            if(filteredModels.length === 0){
                return ["No data found"]
            }
            return filteredModels
        }
        
    }
    //todo: unpin "Enter" button click

    componentDidMount(){
        switch(this.props.valueType){
            case "brand":
                this.setState({
                    setItem: this.props.setBrand,
                    brands: deleteEmptyBrands(this.props.dataBase[this.props.choseStuff.stuff], false)
                })
                break
            case "model":
                
                this.setState({
                    setItem: this.props.setModel,
                    models: this.updateModels(this.props.dataBase, this.props.choseStuff)
                })
                break
            case "stuff":
                this.setState({
                    setItem: this.props.setStuff
                })
                break
            default:
                break
        }
    }

    componentDidUpdate(prevProps){
        if(!equal(this.props, prevProps)){
            switch(this.props.valueType){
                case "stuff":
                    this.inputField.value = this.props.choseStuff.stuff
                    break
                case "brand":
                    this.inputField.value = this.props.choseStuff.brand
                    this.setState({
                        brands: deleteEmptyBrands(this.props.dataBase[this.props.choseStuff.stuff], false)
                    })
                    break
                case "model":
                    this.inputField.value = this.props.choseStuff.model
                    this.setState({
                        models: this.updateModels(this.props.dataBase, this.props.choseStuff)
                    })
                    break
                default:
                    break
            }
        }
        
    }

    renderItems = () => {
        switch(this.props.valueType){
            case "stuff":
                return this.state.stuff.map((item, index) => {
                    return(
                        <li 
                            key ={index}
                            onClick = {() => {this.onClickItem(item)}}
                        >{item}</li>
                    )
                })
            case "brand":
                return this.state.brands.map((item, index) => {
                    return(
                        <li 
                            key ={index}
                            onClick = {() => {this.onClickItem(item)}}
                        >{item}</li>
                    )
                })
            case "model":
                return this.state.models.map((item, index) => {
                    return(
                        <li 
                            key ={index}
                            onClick = {() => {this.onClickItem(item)}}
                        >{item}</li>
                    )
                })
            default: 
                break
        }
        
    }

    onInputForm = () => {
        this.dropdown.classList.add('open')
        switch(this.props.valueType){
            case "stuff":
                filter(this.state.stuff, this.inputField.value, this.dropdown)
                break
            case "brand":
                filter(this.state.brands, this.inputField.value, this.dropdown)
                break
            case "model":
                filter(this.state.models, this.inputField.value, this.dropdown)
                break
            default: 
                break
        }
    }

    onClickItem = (item) => {
        this.inputField.value = item;

        for (let dropdownItem of this.dropdown.children){
            dropdownItem.classList.remove('closed');
        };
        switch(this.props.valueType){
            case "stuff":
                this.props.clearBrand()
                this.props.clearModel()
                this.state.setItem(item)
                break
            case "brand":
                this.props.clearModel()
                this.state.setItem(item)
                break
            case "model":
                this.state.setItem(item)
                break
            default:
                break
        }
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

function mapStateToProps(state){
    return{
        choseStuff: state.choseStuff,
        dataBase: state.dataBase
    }
}
function mapDispatchToProps(dispatch){
    return{
        setBrand: (brand) => dispatch(setBrand(brand)),
        setModel: (model) => dispatch(setModel(model)),
        setStuff: (stuff) => dispatch(setStuff(stuff)),
        clearBrand: () => dispatch(clearBrand()),
        clearModel: () => dispatch(clearModel())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList)