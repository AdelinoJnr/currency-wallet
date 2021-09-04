import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validadeCadastro } from '../../utils/functions';

import './style.css';

function FormCadastro() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [termos, setTermos] = useState(false);

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
        <Link to="/login">
          <button
            disabled={!validadeCadastro(email, firstName, lastName, password, termos)}
            className="btn-acao btn-cadastrar"
            type="button"
          >
            Cadastrar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default FormCadastro;
