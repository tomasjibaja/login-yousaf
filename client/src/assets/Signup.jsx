import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://login-yousaf-server.vercel.app/register', {name, email, password})
        .then(result => {
            console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary text-light vh-100">
            <div className="bg-dark border border-light text-light p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                         type="text"
                         required={true}
                         placeholder="Enter name"
                         autoComplete="off"
                         name="name"
                         className="form-control rounded-0"
                         onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>E-Mail</strong>
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
                        Register
                    </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-70 bg-light rounded-3 text-decoration-none">
                    Login
                </Link>
            </div>
            <Link to="/users" className="btn btn-default border w-70 bg-light rounded-3 text-decoration-none">
                    Users List
            </Link>
        </div>
    )
}

export default Signup