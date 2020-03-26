
import React, {useEffect, useState} from 'react'
import DropdownList from "../UI/DropdownList";
import Button from "../UI/Button";
import {useDispatch} from "react-redux";
import {deleteRecordPhoto, updateRecordPhoto, updateRecordPrice} from "../../redux/dataBase/dataBaseAction";
import {clearAll} from "../../redux/choseStuff/choseStuffAction";

const ChangeRecord = ({stuff, brand, model}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearAll())
    },[])

    const [addParams, setParams] = useState({price: "", photo: null, error: ""})


//|| !(/\.(jpe?g|png)$/i).test(addParams.photo)
    const validateParamPrice = (e) => {
        e.preventDefault()

        if(!addParams.price){
            setParams({...addParams, error: "Fill field with price"})
        } else if(/\D/.test(addParams.price) ){
            setParams({...addParams, error: "Price must contain only DIGITS"})
        } else {
            setParams({...addParams, error: ''})
            dispatch(updateRecordPrice(
                {
                    stuff: stuff === "Visors" ? "Main" : stuff,
                    brand,
                    model
                },
                addParams.price
            ))
        }
    }

    const validateParamPhoto = (e) => {
        e.preventDefault()

        if(!addParams.photo){
            setParams({...addParams, error: "You must chose photo!"})
        } else if(!(/\.(jpe?g|png)$/i).test(addParams.photo.name)){
            setParams({...addParams, error: "Photo must be in JPG, JPEG or PNG format"})
        } else {
            setParams({...addParams, error: ''})
            dispatch(updateRecordPhoto(
                {
                    stuff: stuff === "Visors" ? "Main" : stuff,
                    brand,
                    model
                },
                addParams.photo
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
                            <div className="additional-param-input-btn">
                                <input
                                    className="chosen-value"
                                    type="text"
                                    value = {addParams.price}
                                    onChange={e => setParams({...addParams, price: e.target.value})}
                                />
                                <Button
                                    onClickAction={e => validateParamPrice(e)}
                                >Update price</Button>
                            </div>
                        </div>
                        <div className="additional-param">
                            <span>Photo</span>
                            <div className="additional-param-input-btn">
                                <input
                                    className="chosen-value"
                                    type="file"
                                    onChange={e => setParams({...addParams, photo: e.target.files[0]})}
                                />
                                <Button
                                    onClickAction={e => validateParamPhoto(e)}
                                >Update photo</Button>
                                <Button
                                    onClickAction={() => dispatch(deleteRecordPhoto({
                                        stuff: stuff === "Visors" ? "Main" : stuff,
                                        brand,
                                        model
                                    }))}
                                >Set default</Button>
                            </div>
                        </div>

                    </div>
                    : null
            }
        </div>
    )
}

export default ChangeRecord