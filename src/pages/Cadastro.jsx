import React from 'react';
import { Link } from 'react-router-dom';

import avatar1 from '../image/avatar1.png';
import avatar2 from '../image/avatar2.png';
import avatar3 from '../image/avatar3.png';
import avatar4 from '../image/avatar4.png';
import avatar5 from '../image/avatar5.png';
import avatar6 from '../image/avatar6.png';

function Cadastro() {
  return (
    <main className="main-login">
      <h3 className="title">Sign up</h3>
      <section className="content-avatares">
        <h3 className="title-3">Escolha o seu Avatar</h3>
        <img src={avatar1} alt="avatar1" />
        <img src={avatar2} alt="avatar2" />
        <img src={avatar3} alt="avatar3" />
        <img src={avatar4} alt="avatar4" />
        <img src={avatar5} alt="avatar5" />
        <img src={avatar6} alt="avatar6" />
      </section>
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
    </main>
  );
}

export default Cadastro;
