import React from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <main className="main-login">
      <h3 className="title-login">Sign up</h3>
      <label className="label-input" htmlFor="email">
        <input type="email" id="email" className="inputs" placeholder="Digite seu email" />
      </label>
      <div className="content-full-name">
        <input className="input-name-user" type="text" id="firstname" placeholder="Digite seu nome" />
        <input className="input-name-user" type="text" id="lastname" placeholder="Digite seu sobrenome" />
      </div>

      <label className="label-input" htmlFor="data">
        <input className="input-date" type="date" id="data" />
      </label>

      <label className="label-input" htmlFor="password">
        <input type="password" id="password" className="inputs" placeholder="Digite sua senha" />
      </label>
      <label className="label-input" htmlFor="password">
        <input type="password" id="password" className="inputs" placeholder="Digite sua senha novamente" />
      </label>
      <label className="label-input" htmlFor="termos">
        <input className="checkbox-termos" type="checkbox" name="termos" id="termos" />
        <span className="text-termos">
          Eu li e e aceito os
          {' '}
          <Link to="/">Termos e condições </Link>
          de uso!
        </span>
      </label>
      <Link className="link-cadastrar-btn" to="/login">
        <button className="btn-cadastrar btn-padrao" type="button">
          Cadastrar
        </button>
      </Link>
    </main>
  );
}

export default Cadastro;
