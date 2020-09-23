import React from "react";
import getHistory from '../../history'; 
import { login } from "../../redux/actions/users";
import "./login.scss";

const Login = (props) => {
  

  const onSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    login(credentials)
      .then(() => {
        setTimeout(() => {
          getHistory().push('/home');
        }, 1000);
      })
      .catch((error) => {
        console.log(error);

        alert({ message: "Login failed", description: "Login failed" });
      });
    console.log(credentials);
  };

  return (
    <div className="login">
      

      
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <div className="avatar">
                <img src="https://www.tutorialrepublic.com/examples/images/avatar.png" alt="Avatar" />
              </div>
              <h4 className="modal-title">Iniciar sesión</h4>
             
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Correo electrónico"
                    required="required"
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
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block login-btn"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <a>¿Aún no tienes cuenta?</a>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
