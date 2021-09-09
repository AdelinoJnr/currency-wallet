import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import './styles.css';
import { authUser, userAccess } from '../utils/UserLogin';
import validationMessages from '../utils/loginValidationMessages';
import Toast from '../components/Toast';
import toastShow from '../utils/toastShow';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useApp, setUseApp] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const authUserLogin = () => {
    if (authUser(email, password)) {
      userAccess(email);
      setSnackBarMessage(validationMessages.loginSuccess);
      toastShow();
      setUseApp(true);
      return;
    }
    setSnackBarMessage(validationMessages.invalidUser);
    toastShow();
  };

  if (useApp) {
    return <Redirect to="/" />;
  }

  function verifyEmail(target) {
    const emailValidationMessageEl = document.querySelector('.email.validation-message');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(target.value) && target.value !== '') {
      target.classList.add('invalid');
      emailValidationMessageEl.classList.add('on');
      return;
    }
    emailValidationMessageEl.classList.remove('on');
    target.classList.remove('invalid');
  }

  function verifyPassword(target) {
    const passwordValidationMessageEl = document.querySelector('.password.validation-message');
    if (target.value.length < 6 && target.value !== '') {
      target.classList.add('invalid');
      passwordValidationMessageEl.classList.add('on');
      return;
    }
    passwordValidationMessageEl.classList.remove('on');
    target.classList.remove('invalid');
  }

  return (
    <main className="main-login">
      <Toast text={snackBarMessage} />
      <h3 className="title">Sign in</h3>
      <section className="input-validation-block">
        <input
          className="inputs"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          onBlur={(ev) => verifyEmail(ev.target)}
        />
        <p className="email validation-message">O e-mail deve seguir o padrão user@user.com</p>
      </section>
      <section className="input-validation-block">
        <input
          className="inputs"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          onBlur={(ev) => verifyPassword(ev.target)}
        />
        <p className="password validation-message">A senha deve conter 6 caracteres</p>
      </section>

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
