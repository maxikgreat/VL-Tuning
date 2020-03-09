import React, {useEffect, useRef} from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import keyboardFix from "../../helpFunctions/keyboardFix"
import firebase from '../../firebase'
import {useSelector, useDispatch} from "react-redux";
//custom validator
import useForm from "../../customHooks/useForm";
import validationRules from '../../helpFunctions/validationRules';
//send sendgrid
import readyDataToSend from "../../helpFunctions/readyDataToSend";
//recaptcha
import Recaptcha from 'react-google-invisible-recaptcha'
import {modalOpen} from "../../redux/modal/modalAction";
import {deleteAll} from "../../redux/shoppingCart/shoppingCartAction";

const EndForm = () => {

    const recaptcha = useRef()

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

    const dispatch = useDispatch()

    const {items, total ,quantity} = shoppingCart


    function onSubmitForm() {
        recaptcha.current.execute()
    }

    const captchaWasSuccessful = async () => {
        if(items.length !== 0){
            const dataReady = readyDataToSend(items,total,quantity,values)
            //get func from server
            const sendOrder = firebase.functions().httpsCallable("fireOrder")
            try{
                await sendOrder(dataReady)
                dispatch(modalOpen("Было отправлено", true))
                dispatch(deleteAll())
            }catch (e) {
                console.log(e)
                dispatch(modalOpen("Произошла ошибка", false))
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
                        <label className="form-check-label">
                            Нажимая "Подтвердить", Я соглашаюсь с <Link to = '/private-policy'>политикой конфиденциальности</Link>
                        </label>
                    </div>
                </div>
                <Recaptcha
                    ref={recaptcha}
                    sitekey="6Ldl_t8UAAAAAKEpCesbwyYa9Ia6SRmo78xoLiAS"
                    onResolved = {captchaWasSuccessful}
                />
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