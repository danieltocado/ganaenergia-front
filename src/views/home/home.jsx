import React from 'react'
import { useSelector } from "react-redux";
import { logout } from '../../redux/actions/users';
import './home.scss'
import { Link } from 'react-router-dom';

function Home() {

    const user = useSelector((state) => state.user);

    return (
        <div className="home">
           {user?._id ? (
            <div className="home">
                <h1>Bienvenido usuario {user.name} {user.surname}</h1>
                <h2>{user.email}</h2>
                <h3>{user.cp} - {user.location}</h3>
                <Link to="/">Volver al inicio</Link> 
            </div>
            ) : (
                <p>no se ha encontrado user </p>
              )}
        </div>
    )
}

export default Home
