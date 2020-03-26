
import React, {useState} from 'react'
import DropdownList from "../UI/DropdownList";
import Button from "../UI/Button";
import {useDispatch} from "react-redux";
import {updateRecord} from "../../redux/dataBase/dataBaseAction";

const ChangeRecord = ({stuff, brand, model}) => {

    const [addParams, setParams] = useState({price: "", photo: "", error: ""})

    const dispatch = useDispatch()

    const validateParams = (e) => {
        e.preventDefault()

        if(!addParams.price || !addParams.photo){
            setParams({...addParams, error: "Fill ALL fields!"})
        } else if(/\D/.test(addParams.price) || !(/\.(jpe?g|png)$/i).test(addParams.photo)){
            setParams({...addParams, error: "Price must contain only DIGITS and photo must be in JPG, JPEG or PNG format"})
        } else {
            setParams({...addParams, error: ''})
            dispatch(updateRecord(
                {
                    stuff: stuff === "Visors" ? "Main" : stuff,
                    brand,
                    model
                },
                addParams.price
            ))
        }
    }

    return(
        <div className="change-record-hld">
            <div className="dropdowns-hld">
                <div className="dropdown">
                    <span>Category</span>
                    <DropdownList
                        valueType="stuff"
                    />
                </div>

                {
                    stuff
                    ? <div className="dropdown">
                            <span>Brand</span>
                            <DropdownList
                                valueType="brand"
                            />
                        </div> : null

                }
                {
                    brand
                        ? <div className="dropdown">
                            <span>Model</span>
                            <DropdownList
                                valueType="model"
                            />
                        </div> : null
                }
            </div>
            {
                addParams.error
                ? <span className = "input-error">{addParams.error}</span>
                    : null
            }
            {
                stuff && brand && model
                ? <div className="additional-params-hld">
                        <div className="additional-param">
                            <span>Price</span>
                            <input
                                className="chosen-value"
                                type="text"
                                value = {addParams.price}
                                onChange={e => setParams({...addParams, price: e.target.value})}
                            />
                        </div>
                        <div className="additional-param">
                            <span>Photo</span>
                            <input
                                className="chosen-value"
                                type="file"
                                value = {addParams.photo}
                                onChange={e => setParams({...addParams, photo: e.target.value})}
                            />
                        </div>
                    <Button
                        onClickAction={e => validateParams(e)}
                    >Update</Button>
                    </div>
                    : null
            }
        </div>
    )
}

export default ChangeRecord