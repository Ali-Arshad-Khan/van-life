import { useState } from "react"
import { useLocation } from "react-router-dom"
import { loginUser } from "../api"
export default function Login() {
    const [login, setLogin] = useState({email: "", password: ""})
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    const location = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        async function getuser() {
            try {
                const data = await loginUser(login)
                console.log(data)
                setError(null)
            } catch (error) {
                setError(error)
            } finally {
                setStatus("idle")
            }

        }

        getuser()
        console.log(login)
    }

    function handleInput(e) {
        const {name, value} = e.target
        setLogin(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="login-container">
            {location.state?.message && <h3 className="first-login">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3>{error.message}</h3>}
            <form onSubmit={handleSubmit}>
                <input 
                    name="email"
                    onChange={handleInput}
                    type="email"
                    placeholder="Email address" 
                    value={login.email}
                    required
                />
                <input 
                    name="password"
                    onChange={handleInput}
                    type="password" 
                    placeholder="Password"
                    value={login.password}
                    required
                />
                <button className="signin" disabled={status === "submitting"}>
                    {status === "submitting" ? "Loging..." : "Sign in"}
                </button>
            </form>
        </div>
    )
}