import React from 'react';
import { randomCodigoPix } from '../../utils/functions';

import './style.css';

function FormPix({ value }) {
  const frase1 = 'Deposite com Pix quando quiser! O pagamento é instantâneo, ';
  const frase2 = 'prático e pode ser feito em poucos segundos. É muito rápido e seguro.';

  return (
    <form className="form-deposit">
      <h4 className="title-3">Pagar com Pix</h4>
      <p className="text-info">{frase1 + frase2}</p>
      <input className="inputs-deposit input-pix" type="text" name="codigo" value={randomCodigoPix(60)} />
      <button type="button" className="btn-metade btn-copiar">Copiar código</button>
      <p className="total-valor-pix">{`Total: R$ ${value},00`}</p>
    </form>
  );
}

export default FormPix;
