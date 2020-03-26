import React, {PureComponent} from 'react'
import filter from '../../helpFunctions/filter'
import equal from 'fast-deep-equal'
import deleteEmptyBrands from '../../helpFunctions/deleteEmptyBrands'
import fromEnToRu from "../../helpFunctions/fromEnToRu";

//redux
import { connect } from 'react-redux'
import {setBrand, setModel, setStuff, clearModel, clearBrand} from '../../redux/choseStuff/choseStuffAction'
import keyboardFix from "../../helpFunctions/keyboardFix";

class DropdownList extends PureComponent {

    state = {
        brands:[], //array of String
        models: [], // array of OBJECTS
        stuff: ["Ветровики", "Ветровики Хром", "Мухобойки", "Спойлера"], //always on default
        setItem: null
    }

    updateModels = (dataBase, choseStuff) => {

        let filteredModels = []

        if(dataBase[choseStuff.stuff][choseStuff.brand] !== undefined){
            filteredModels =  dataBase[choseStuff.stuff][choseStuff.brand].data.map(item => {
                return item
            })
            if(filteredModels.length === 0){
                return ["Не удалось найти данные"]
            }
            return filteredModels
        }

    }

    componentDidMount(){

        keyboardFix()

        switch(this.props.valueType){
            case "brand":
                this.setState({
                    setItem: this.props.setBrand,
                    brands: deleteEmptyBrands(this.props.fireDataBase.data[this.props.choseStuff.stuff], false)
                })
                break
            case "model":
                this.setState({
                    setItem: this.props.setModel,
                    models: this.updateModels(this.props.fireDataBase.data, this.props.choseStuff)
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
                    this.inputField.value = fromEnToRu(this.props.choseStuff.stuff)
                    break
                case "brand":
                    this.inputField.value = this.props.choseStuff.brand
                    this.setState({
                        brands: deleteEmptyBrands(this.props.fireDataBase.data[this.props.choseStuff.stuff], false)
                    })
                    break
                case "model":
                    if(this.props.choseStuff.model){
                        this.inputField.value = this.props.choseStuff.model.Name
                    } else {
                        this.inputField.value = ""
                    }
                    this.setState({
                        models: this.updateModels(this.props.fireDataBase.data, this.props.choseStuff)
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
            case "model": // model is OBJECT
                return this.state.models.map((item, index) => {
                    return(
                        <li 
                            key ={index}
                            onClick = {() => {this.onClickItem(item)}}
                        >{item.Name}</li>
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
                const filterModelNames = this.state.models.map(model => {
                    return model.Name
                })
                filter(filterModelNames, this.inputField.value, this.dropdown) // pass only names
                break
            default: 
                break
        }
    }

    onClickItem = (item) => {
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
        this.inputField.placeholder = 'Поиск...';
        this.dropdown.classList.add('open');
        for (let dropdownItem of this.dropdown.children){
            dropdownItem.classList.remove('closed');
        }
    }

    onBlurInput = () => {
        switch(this.props.valueType){
            case "stuff":
                this.inputField.value = this.props.choseStuff.stuff
                break
            case "brand":
                this.inputField.value = this.props.choseStuff.brand
                break
            case "model":
                if(this.props.choseStuff.model !== null){
                    this.inputField.value = this.props.choseStuff.model.Name // for first blur event
                }
                break
            default:
                break
        }
        this.dropdown.classList.remove('open');
    }

    render(){
        return(
            <form onSubmit = {e => {e.preventDefault()}}>
                <input 
                    disabled = {this.props.disabled}
                    className={"chosen-value" + (this.props.disabled ? " disabled" : "")} 
                    type="text" 
                    placeholder="Поиск..."
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
        fireDataBase: state.dataBase
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