import React, { useEffect, useState } from "react";
import Login from "../login/login";
import { register } from "../../redux/actions/users";
import "./register.scss";
import Axios from "axios";
//import { useHistory } from 'react-router-dom';

const Register = (props) => {
  const [postalCode, setPostalCode] = useState("");
  const [locationn, setLocation] = useState("");

  function handleChange(event) {
    setPostalCode(event.target.value);
    console.log(event.target.value);
    if (postalCode?.length === 5) {
      console.log("tengo 5 digitos");
      getCity();
    }
  }

  function getCity() {
    Axios.get(
      `https://webservicetest.gaolania.com.es/ine.json/id/${postalCode}`
    ).then((res) => {
      const location = res.data[0]?.municipio;
      setLocation(location);
      console.log(location);
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      email: event.target.email.value,
      cp: event.target.cp.value,
      location: event.target.location.value,
      password: event.target.password.value,
    };

    register(user)
      .then(() => {
        setTimeout(() => {
          //window.location.reload()
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(user);
  };

  return (
    <div className="register">
      <div className="modal-dialog modal-login">
      <div className="modal-content">
          <form onSubmit={onSubmit} className="signup-form">
          <div className="modal-header">
              <div className="avatar">
                <img src="https://www.tutorialrepublic.com/examples/images/avatar.png" alt="Avatar" />
              </div>
              <h4 className="modal-title">Registro de usuario</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
                  <div className="modal-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nombre"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="surname"
                placeholder="Apellidos"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Correo electrónico"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="cp"
                placeholder="Código postal"
                required="required"
                onChange={handleChange}
                onKeyUp={getCity}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="Localidad"
                defaultValue={locationn}
                required="required"
                disabled="disabled"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Contraseña"
                required="required"
              />
            </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block login-btn"
            >
              Regístrate ahora
            </button>
          </form>
          
        
      </div>
    </div>
    </div>
  );
};

export default Register;
