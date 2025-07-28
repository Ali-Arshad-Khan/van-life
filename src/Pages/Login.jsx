import { useState } from "react"
export default function Login() {
    const [login, setLogin] = useState({email: "", password: ""})
    
    function handleSubmit(e) {
        e.preventDefault()
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
            <h1>Sign in to your account</h1>
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
                <button className="signin">Sign in</button>
            </form>
        </div>
    )
}