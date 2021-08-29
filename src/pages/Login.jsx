import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiLockPasswordFill } from 'react-icons/ri';

import './styles.css';

function Login() {
  return (
    <main className="main-login">
      <h3 className="title-login">Sign in</h3>
      <label className="label-input" htmlFor="email">
        <FaUserCircle className="icon-inputs" />
        <input
          id="email"
          className="inputs"
          placeholder="Email"
          type="email"
        />
      </label>
      <label className="label-input" htmlFor="password">
        <RiLockPasswordFill className="icon-inputs" />
        <input
          id="password"
          className="inputs"
          placeholder="Senha"
          type="password"
        />
      </label>
      <div className="content-facilitacao">
        <label htmlFor="conect" className="label-connected">
          <input className="input-connected" type="checkbox" id="conect" />
          Manter conectado
        </label>
        <span>esqueceu a senha?</span>
      </div>

      <Link className="login-efect" to="/">
        <button type="button" className="btn-padrao">
          Entrar
        </button>
      </Link>

      <div className="content-or-rede-social">
        <hr />
        <span>or</span>
        <hr />
      </div>

      <button className="btn-padrao btn-google" type="button">
        <FcGoogle className="icon-social" />
        Continuar com Google
      </button>
      <button className="btn-padrao btn-facebook" type="button">
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
