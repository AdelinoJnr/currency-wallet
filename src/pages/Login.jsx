import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import './styles.css';

function Login() {
  return (
    <main className="main-login">
      <h3 className="title">Sign in</h3>
      <input
        id="email"
        className="inputs"
        placeholder="Email"
        type="email"
      />
      <input
        id="password"
        className="inputs"
        placeholder="Senha"
        type="password"
      />
      <div className="content-facilitacao">
        <label htmlFor="conect" className="label-connected">
          <input className="input-connected" type="checkbox" id="conect" />
          Manter conectado
        </label>
        <span>esqueceu a senha?</span>
      </div>

      <Link className="login-efect" to="/">
        <button type="button" className="btn-acao btn-logar">
          Entrar
        </button>
      </Link>

      <div className="content-or-rede-social">
        <hr />
        <span>or</span>
        <hr />
      </div>

      <button className="btn-google" type="button">
        <FcGoogle className="icon-social" />
        Continuar com Google
      </button>
      <button className="btn-facebook" type="button">
        <FaFacebook className="icon-social" />
        Continuar com Facebook
      </button>

      <span className="register">
        Ainda nao tem cadastro?
        <Link className="link-register" to="/cadastro">sign up</Link>
      </span>
    </main>
  );
}

export default Login;
