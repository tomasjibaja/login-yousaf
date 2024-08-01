import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-dark border border-light text-light p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                         type="text"
                         required={true}
                         placeholder="Enter email"
                         autoComplete="off"
                         name="email"
                         className="form-control rounded-0"
                         onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                         type="password"
                         required={true}
                         placeholder="Enter password"
                         autoComplete="off"
                         name="password"
                         className="form-control rounded-0"
                         onChange={(e) => setPassword(e.target.value)}
                        />    
                    </div>
                    <button type="submit" className="btn btn-success w-70 rounded-3">
                        Login
                    </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-70 bg-light rounded-3 text-decoration-none">
                    Create account
                </Link>
            </div>
        </div>
    )
}

export default Login