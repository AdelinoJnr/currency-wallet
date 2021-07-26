import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function Login() {
  return (
    <main>
      <h3>Sign up</h3>
      <input 
        placeholder="Email"
      />
      <input 
        placeholder="Password"
      />
      <label htmlFor="conect">Manter conectado</label>
      <input type="checkbox" id="conect" />
      <span>esqueceu a senha?</span>
      <button type="button">Login</button>

      <span>or</span>

      <button type="button">Entrar com Google</button>
      <button type="button">Entrar com Facebook</button>

      <span>Ainda nao tem cadastro? <Link to="/">sign in</Link></span>
    </main>
  );
}

export default Login;
