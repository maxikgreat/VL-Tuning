import React, {useEffect, useState} from 'react'
import Button from "../components/UI/Button";

const Login = () => {

    useEffect(() => {
        console.log(admin)
    })

    const [admin, setAdmin] = useState({email: "", password: "", error: {email: "", password: ""}})

    const tryLogin = (e) => {
        e.preventDefault()
        if(!admin.email){
            setAdmin((admin) => ({
                ...admin,
                error: {
                    email: "This field is required!"
                }
            }))
        }

        if(!admin.password){
            setAdmin((admin) => ({
                ...admin,
                error: {
                    password: "This field is required!"
                }
            }))
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
                    {
                        admin.error.email
                            ? <span className={"input-error"}>{admin.error.email}</span>
                            : null
                    }
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
                    {
                        admin.error.password
                            ? <span className={"input-error"}>{admin.error.password}</span>
                            : null
                    }
                </div>
                <Button
                    type="submit"
                    onClickAction={e => tryLogin(e)}
                >Log In</Button>
            </div>
        </section>
    )
}

export default Login