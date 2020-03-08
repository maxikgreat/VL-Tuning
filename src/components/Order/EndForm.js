import React, {useEffect} from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import keyboardFix from "../../helpFunctions/keyboardFix"
import firebase from '../../firebase'
import {useSelector} from "react-redux";
//custom validator
import useForm from "../../customHooks/useForm";
import validate from '../../helpFunctions/validationRules';
//send sendgrid
import readyDataToSend from "../../helpFunctions/readyDataToSend";

const EndForm = () => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    function login() {
        console.log('No errors, submit callback called!');
    }

    const shoppingCart = useSelector(state => state.shoppingCart)

    const {items, total ,quantity} = shoppingCart


    useEffect(() => {
        keyboardFix()
    }, [])

    const onSubmitForm = (e) => {
        //e.preventDefault()
        if(items.length !== 0){
            const dataReady = readyDataToSend(items,total,quantity)
            //get func from server
            const sendOrder = firebase.functions().httpsCallable("fireOrder")
        }





        // try{
        //     const response = await sendOrder()
        //     console.log(response)
        // }catch (e) {
        //     console.log(e)
        // }

    }


    return(
        <div className="wrapperPadding">
            <h2 className = "title">Контактная форма</h2>
            <p>Оставьте Ваши контактные данные ниже. Наши менеджеры свяжутся с Вами для уточнения деталей заказа.</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <div className="col-6 mb-3">
                        <label>Имя</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Имя..."
                            required
                        />
                    </div>
                    <div className="col-6 mb-3">
                        <label>Фамилия</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Фамилия..."
                            required
                        />
                    </div>
                </div>
                <div className = "form-row">
                    <div className="col-12 mb-3">
                        <label>E-mail</label>
                        {errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email && 'incorrect'}`}
                            onChange={handleChange}
                            value={values.email || ''}
                            placeholder="E-mail"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-7 mb-3">
                        <label>Телефон</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Телефон..."
                            required
                        />
                    </div>
                    <div className="col-5 mb-3">
                        <label>Город</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Город..."
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            required />
                        <label className="form-check-label">
                            Я соглашаюсь с <Link to = '/private-policy'>политикой конфиденциальности</Link>
                        </label>
                    </div>
                </div>
                <Button
                    type={"submit"}
                    //onClickAction = {(e) => onSubmitForm(e)}
                >
                    Подтвердить
                </Button>
            </form>
        </div>
    )
}

export default EndForm