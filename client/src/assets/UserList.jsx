import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

function UserList() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('http://Localhost:3001/users')
        .then(results => {
            setUsers(results.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    if(isLoading) {
        return(
            <div>
                <h2>Users</h2>
                <h4>Loading users...</h4>
            </div>
        ) 
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-black h-100">
            <h2 className="mt-3 text-light">USERS</h2>
            {users.map((elem, key) => {
                return(
                    <div className="w-25 border border-info m-3 p-2 border-3 rounded-1 bg-dark text-light" key={key}>
                        <h4>{elem.name}</h4>
                        <h6>{elem.email}</h6>
                        <h6 className="badge bg-primary">{elem.password}</h6>
                    </div>
                )
            })}
        </div>
    )

    
}

export default UserList