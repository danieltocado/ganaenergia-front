import React from 'react';
import './index.scss';
import Register from '../../components/register/register';
import Login from '../../components/login/login';

function Index() {

    return (
        <div className="index">
           <Register/>
           <Login/>
        </div>
    )
}

export default Index
