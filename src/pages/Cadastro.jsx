import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import FormCadastro from '../components/FormCadastro';

function Cadastro() {
  const [avatar, setAvatar] = useState('');
  return (
    <main className="main-login">
      <h3 className="title">Sign up</h3>
      <Avatar setAvatar={setAvatar} />
      {avatar !== '' && <FormCadastro avatar={avatar} />}
    </main>
  );
}

export default Cadastro;
