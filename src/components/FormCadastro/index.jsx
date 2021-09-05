import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { validadeCadastro } from '../../utils/functions';
import { saveUser, userExists } from '../../utils/UserLogin';

import './style.css';

function FormCadastro({ avatar }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState('');
  const [termos, setTermos] = useState(false);

  const cadastroUser = () => {
    if (userExists(email)) {
      return alert('Esse email ja existe');
    }
    const fullName = `${firstName} ${lastName}`;
    saveUser(fullName, password, email, avatar);
    setChecked(true);
  };

  if (checked) {
    return <Redirect to="/login" />;
  }

  return (
    <form className="form-cadastro">
      <input
        type="email"
        className="inputs"
        placeholder="Digite seu email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <div className="content-full-name">
        <input
          className="input-name-user"
          type="text"
          placeholder="Digite seu nome"
          value={firstName}
          onChange={(ev) => setFirstName(ev.target.value)}
        />
        <input
          className="input-name-user"
          type="text"
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value)}
        />
      </div>
      <input
        type="password"
        className="inputs"
        placeholder="Digite sua senha"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />

      <label className="label-input" htmlFor="termos">
        <input
          className="checkbox-termos"
          type="checkbox"
          name="termos"
          id="termos"
          value={termos}
          onClick={(ev) => setTermos(ev.target.checked)}
        />
        <p className="text-termos">
          Eu li e e aceito os
          {' '}
          <Link to="/cadastro">Termos e condições </Link>
          de uso!
        </p>
      </label>
      <div>
        <button
          onClick={cadastroUser}
          disabled={!validadeCadastro(email, firstName, lastName, password, termos)}
          className="btn-acao btn-cadastrar"
          type="button"
        >
          Cadastrar
        </button>
      </div>

      <span className="register">
        Já tem cadastro ?
        <Link className="link-register" to="/login">sign in</Link>
      </span>
    </form>
  );
}

export default FormCadastro;
