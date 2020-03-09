import React, {useEffect, useState} from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import keyboardFix from "../../helpFunctions/keyboardFix"
import firebase from '../../firebase'
import {useSelector} from "react-redux";
//custom validator
import useForm from "../../customHooks/useForm";
import validationRules from '../../helpFunctions/validationRules';
//send sendgrid
import readyDataToSend from "../../helpFunctions/readyDataToSend";

const EndForm = () => {

    const [privateChecker, setPrivate] = useState(false)

    useEffect(() => {
        keyboardFix()
    }, [])

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(onSubmitForm, validationRules);

    const shoppingCart = useSelector(state => state.shoppingCart)

    const {items, total ,quantity} = shoppingCart

    async function onSubmitForm() {

        if(items.length !== 0 && privateChecker){
            const dataReady = readyDataToSend(items,total,quantity,values)
            //get func from server
            const sendOrder = firebase.functions().httpsCallable("fireOrder")
            try{
                console.log(dataReady)
                await sendOrder(dataReady)
            }catch (e) {
                console.log(e)
            }
        }
    }


    return(
        <div className="wrapperPadding">
            <h2 className = "title">Контактная форма</h2>
            <p>Оставьте Ваши контактные данные ниже. Наши менеджеры свяжутся с Вами для уточнения деталей заказа.</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <div className="col-6 mb-3">
                        <label>Имя</label>
                        {errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                        <input
                            type="text"
                            name="name"
                            className={`form-control ${errors.name && 'incorrect'}`}
                            onChange={handleChange}
                            value={values.name || ''}
                            placeholder="Имя..."
                            required
                        />
                    </div>
                    <div className="col-6 mb-3">
                        <label>Фамилия</label>
                        {errors.surname && (
                            <p className="error">{errors.surname}</p>
                        )}
                        <input
                            type="text"
                            name="surname"
                            className={`form-control ${errors.surname && 'incorrect'}`}
                            placeholder="Фамилия..."
                            onChange={handleChange}
                            value={values.surname || ''}
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
                        {errors.phone && (
                            <p className="error">{errors.phone}</p>
                        )}
                        <input
                            type="tel"
                            name="phone"
                            className={`form-control ${errors.phone && 'incorrect'}`}
                            placeholder="Телефон..."
                            onChange={handleChange}
                            value={values.phone || ''}
                            required
                        />
                    </div>
                    <div className="col-5 mb-3">
                        <label>Город</label>
                        {errors.city && (
                            <p className="error">{errors.city}</p>
                        )}
                        <input
                            type="text"
                            name="city"
                            className={`form-control ${errors.city && 'incorrect'}`}
                            placeholder="Город..."
                            onChange={handleChange}
                            value={values.city || ''}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            onChange={() => {setPrivate(!privateChecker)}}
                            checked = {privateChecker}
                            type="checkbox"
                            id="privateInp"
                            required
                        />
                        <label className="form-check-label" htmlFor="privateInp">
                            Я соглашаюсь с <Link to = '/private-policy'>политикой конфиденциальности</Link>
                        </label>
                    </div>
                    {!privateChecker && (
                        <p className="error left">Это обязательно</p>
                    )}
                </div>
                <Button
                    type={"submit"}
                >
                    Подтвердить
                </Button>
            </form>
        </div>
    )
}

export default EndForm