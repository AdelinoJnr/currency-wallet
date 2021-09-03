import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

import Obama from '../image/barack_obama.jpg';

function Perfil() {
  return (
    <>
      <Header />
      <Welcome />
      <section>
        <section className="content-perfil">
          <img className="img-user-perfil" src={Obama} alt="Foto do Usuario" />
          <div className="content-data-user">
            <p className="user-name-perfil">Barack Obama</p>
            <p className="user-email-perfil">barackobama@gmail.com</p>
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
              onClick={() => localStorage.removeItem('user')}
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
