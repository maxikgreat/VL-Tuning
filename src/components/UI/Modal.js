import React from 'react'
import Button from './Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector, useDispatch} from "react-redux";
import {modalClose} from "../../redux/modal/modalAction";

const Modal = () => {

    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()

    return(
        <div className = "modalContainer">
            <div className = "modalContent">
                {modal.isSuccess ?
                    <FontAwesomeIcon icon="check-circle" />
                    : <FontAwesomeIcon icon="exclamation-circle" />
                }
                <h2>{modal.text}</h2>
                <Button
                    onClickAction={() => {dispatch(modalClose())}}
                >Закрыть</Button>
            </div>
        </div>
    )
}

export default Modal
