import React from 'react';
import { AiOutlineReload } from 'react-icons/ai';

import './style.css';

function Atualizar() {
  return (
    <a className="link-atualizar" href="/">
      <button type="button">
        <AiOutlineReload className="icon-reload" />
      </button>
    </a>
  );
}

export default Atualizar;
