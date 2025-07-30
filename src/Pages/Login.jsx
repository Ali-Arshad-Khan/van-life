import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"
export default function Login() {
    const [login, setLogin] = useState({email: "", password: ""})
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    
    const location = useLocation()
    const navigate = useNavigate()
    
    const from = location.state?.from || "/host"

   function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(login)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
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
            {error?.message && <h3 className="first-login">{error.message}</h3>}
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
                <button 
                    className="signin" 
                    disabled={status === "submitting"}
                >    
    
                    {status === "submitting" ? "Loging..." : "Sign in"}
                </button>

                  <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                    <strong>Demo login:</strong><br />
                    Email: <code>b@b.com</code><br />
                    Password: <code>p123</code>
                </p>
            </form>
      <button
        style={{ marginTop: "1rem" }}
        onClick={() => {
          setLogin({email: "b@b.com", password: "p123"});
        }}
      >
        Autofill Demo Credentials
      </button>
        </div>
    )
}