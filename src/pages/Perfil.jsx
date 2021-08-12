import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Obama from '../image/barack_obama.jpg';

function Perfil() {
  return (
    <>
      <Header />
      <hr />
      <section>
        <section className="content-perfil">
          <img className="img-user-perfil" src={Obama} alt="Foto do Usuario" />
          <div className="content-data-user">
            <p className="user-name-perfil">Barack Obama</p>
            <p className="user-email-perfil">barackobama@gmail.com</p>
          </div>
        </section>
        <section className="content-btn-perfil">
          <button className="btn-padrao" type="button">
            Historico de compras
          </button>
          <button className="btn-padrao btn-exit" type="button">
            Sair
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
