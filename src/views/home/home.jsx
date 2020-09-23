import React from 'react'
import { useSelector } from "react-redux";
import { logout } from '../../redux/actions/users';

function Home() {

    const user = useSelector((state) => state.user);

    return (
        <div>
           {user?._id ? (
            <div className="">
                <h1>bienvenido al home crack {user.name} {user.surname}</h1>
                <button onClick={logout}>Logout</button>
            </div>
            ) : (
                <p>no se ha encontrado user </p>
              )}
        </div>
    )
}

export default Home
