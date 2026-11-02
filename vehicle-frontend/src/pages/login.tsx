import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState("")
    const [passWord, setPassWord] = useState("")

    const navigate = useNavigate()
    const location = useLocation()

    const { login } = useAuth()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (username === "admin" && passWord === "admin") {

            login()

            const from = location.state?.from?.pathname || '/'

            navigate(from, { replace: true })

        } else {
            alert("Login Anda salah!")
        }
    }

    return (
        <main className="login-container">
            <section className="login-card">
                <h1>Login</h1>

                <p className="login-description">
                    Silakan masuk untuk melanjutkan.
                </p>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>

                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Masukkan username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={passWord}
                            onChange={e => setPassWord(e.target.value)}
                            placeholder="Masukkan password"
                            required
                        />
                    </div>

                    <button type="submit">
                        Masuk
                    </button>

                </form>
            </section>
        </main>
    )
}

export default Login