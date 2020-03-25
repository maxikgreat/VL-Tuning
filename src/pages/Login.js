import React, {useEffect, useState} from 'react'
import Button from "../components/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {adminLogIn} from "../redux/dataBase/dataBaseAction";

const Login = () => {

    const fireData = useSelector(state => state.dataBase)
    const dispatch = useDispatch()

    const [admin, setAdmin] = useState({email: "", password: "", error: ""})

    const tryLogin = (e) => {
        e.preventDefault()
        if(!admin.email || !admin.password){
            setAdmin({
                ...admin,
                error: "These fields are required!"
            })
        } else {
            setAdmin({
                ...admin,
                error: ""
            })
            dispatch(adminLogIn(admin.email, admin.password))
        }
    }

    return(
        <section className="login">
            <div className = "login-container">
                <div className = "form-container">
                    <label>Login</label>
                    <input
                        type="text"
                        onChange={e => setAdmin({...admin, email: e.target.value})}
                        value={admin.email}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className = "form-container">
                    <label>Password</label>

                    <input
                        type="password"
                        onChange={e => setAdmin({...admin, password: e.target.value})}
                        value={admin.password}
                        placeholder="Password"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    onClickAction={e => tryLogin(e)}
                >Log In</Button>
                {
                    admin.error
                        ? <span className={"input-error"}>{admin.error}</span>
                        : fireData.error ?
                            <span className={"input-error"}>{fireData.error}</span>
                            : null
                }
            </div>
        </section>
    )
}

export default Login