import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import './styles.css';
import { authUser, userAccess } from '../utils/UserLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useApp, setUseApp] = useState(false);

  const authUserLogin = () => {
    if (authUser(email, password)) {
      userAccess(email);
      setUseApp(true);
      return;
    }
    alert('Usuario invalido');
  };

  if (useApp) {
    return <Redirect to="/" />;
  }

  return (
    <main className="main-login">
      <h3 className="title">Sign in</h3>
      <input
        className="inputs"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        className="inputs"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <div className="content-facilitacao">
        <label htmlFor="conect" className="label-connected">
          <input className="input-connected" type="checkbox" id="conect" />
          Manter conectado
        </label>
        <span>esqueceu a senha?</span>
      </div>

      <div className="login-efect">
        <button onClick={authUserLogin} type="button" className="btn-acao btn-logar">
          Entrar
        </button>
      </div>

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
