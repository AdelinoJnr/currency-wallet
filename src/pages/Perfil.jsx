import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { avatars, userDefault } from '../data';

function Perfil() {
  const key = localStorage.getItem('user');
  const { name, email, avatar } = key ? JSON.parse(key) : userDefault;
  return (
    <>
      <Header />
      <Welcome />
      <section>
        <section className="content-perfil">
          <img className="img-user-perfil" src={avatars[avatar]} alt="Avatar" />
          <div className="content-data-user">
            <p className="user-name-perfil">{name}</p>
            <p className="user-email-perfil">{email}</p>
          </div>
        </section>
        <section className="content-btn-perfil">
          <button className="btn btn-historic" type="button">
            Historico de compras
          </button>
          <Link to="/login">
            <button
              className="btn btn-exit"
              type="button"
              onClick={() => localStorage.setItem('user', JSON.stringify({}))}
            >
              Sair
            </button>
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
