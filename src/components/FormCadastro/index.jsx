import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function FormCadastro() {
  return (
    <form className="form-cadastro">
      <input type="email" id="email" className="inputs" placeholder="Digite seu email" />
      <div className="content-full-name">
        <input className="input-name-user" type="text" id="firstname" placeholder="Digite seu nome" />
        <input className="input-name-user" type="text" id="lastname" placeholder="Digite seu sobrenome" />
      </div>
      <input className="input-date" type="date" id="data" />
      <input type="password" id="password" className="inputs" placeholder="Digite sua senha" />
      <input type="password" id="password" className="inputs" placeholder="Digite sua senha novamente" />

      <label className="label-input" htmlFor="termos">
        <input className="checkbox-termos" type="checkbox" name="termos" id="termos" />
        <p className="text-termos">
          Eu li e e aceito os
          <Link to="/">Termos e condições </Link>
          de uso!
        </p>
      </label>
      <Link to="/login">
        <button className="btn-acao btn-cadastrar" type="button">
          Cadastrar
        </button>
      </Link>
    </form>
  );
}

export default FormCadastro;
