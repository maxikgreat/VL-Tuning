import React, {useEffect} from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import keyboardFix from "../../helpFunctions/keyboardFix";

const EndForm = () => {

    useEffect(() => {
        keyboardFix()
    }, [])

    const onSubmitForm = (e) => {
        //console.log("Submited")
        //const callable = firebase.functions().httpsCallable("sendMessage")
        //return callable({ text: 'Sending email with React and SendGrid is fun!', subject: 'Email from React'}).then(console.log)
    }


    return(
        <div className="wrapperPadding">
            <h2 className = "title">Контактная форма</h2>
            <p>Оставьте Ваши контактные данные ниже. Наши менеджеры свяжутся с Вами для уточнения деталей заказа.</p>
            <form>
                <div className="form-row">
                    <div className="col-6 mb-3">
                        <label htmlFor="validationDefault01">Имя</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Имя..." required/>
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="validationDefault02">Фамилия</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Фамилия..." required/>
                    </div>
                </div>
                <div className = "form-row">
                    <div className="col-12 mb-3">
                        <label htmlFor="validationDefault03">E-mail</label>
                        <input type="email" className="form-control" id="validationDefault03" placeholder="E-mail" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-7 mb-3">
                        <label htmlFor="validationDefault04">Телефон</label>
                        <input type="tel" className="form-control" id="validationDefault04" placeholder="Телефон..." required />
                    </div>
                    <div className="col-5 mb-3">
                        <label htmlFor="validationDefault05">Город</label>
                        <input type="text" className="form-control" id="validationDefault05" placeholder="Город..." required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck1" required />
                        <label className="form-check-label" htmlFor="invalidCheck1">
                            Я соглашаюсь с <Link to = '/private-policy'>политикой конфиденциальности</Link>
                        </label>
                    </div>
                </div>
                <Button
                    onClickAction = {() => onSubmitForm()}
                >
                    Подтвердить
                </Button>
            </form>
        </div>
    )
}

export default EndForm