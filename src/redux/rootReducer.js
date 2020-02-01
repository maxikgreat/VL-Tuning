import {combineReducers} from 'redux'
import choseStuffReducer from './choseStuff/choseStuffReducer'


export default combineReducers({
    choseStuff: choseStuffReducer
})