import React, { useState } from 'react';
import { classButtonsPay } from '../../utils/functions';

import './style.css';

const classButtons = {
  cartao: 'btn-cartao',
  boleto: 'btn-boleto',
  pix: 'btn-pix',
};

function MetodoPagemento({ setMetodoPagament }) {
  const [classe, setClasse] = useState(classButtons);
  const handleClick = ({ target: { innerHTML } }) => {
    setMetodoPagament(innerHTML);
    setClasse(classButtonsPay(innerHTML));
  };

  return (
    <div className="content-metodo-pagament">
      <h3 className="title-3">Metodo de pagamento</h3>
      <button onClick={handleClick} className={classe.cartao} type="button">Cartao</button>
      <button onClick={handleClick} className={classe.boleto} type="button">Boleto</button>
      <button onClick={handleClick} className={classe.pix} type="button">Pix</button>
    </div>
  );
}

export default MetodoPagemento;
