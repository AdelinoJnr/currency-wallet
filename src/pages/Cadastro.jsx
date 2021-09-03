import React from 'react';
import Avatar from '../components/Avatar';
import FormCadastro from '../components/FormCadastro';

function Cadastro() {
  return (
    <main className="main-login">
      <h3 className="title">Sign up</h3>
      <Avatar />
      <FormCadastro />
    </main>
  );
}

export default Cadastro;
