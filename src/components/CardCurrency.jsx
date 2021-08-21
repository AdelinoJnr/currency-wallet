import React from 'react';
import { Link } from 'react-router-dom';

import { currencysNames } from '../data';
import { converteInNumber } from '../utils/functions';

function CardCurrency({ currency }) {
  const code = Object.keys(currency);
  const { buy, last } = currency[code[0]];
  const percent = 100 - (converteInNumber(Number(buy).toFixed(2)) * 100 / converteInNumber(Number(last).toFixed(2)));

  return (
    <Link to={`/${code[0]}`}>
      <section className="content-currency">
        <div className="nome-currency">
          <p>{currencysNames[code]}</p>
          <p>{code[0]}</p>
        </div>
        <div className="preco-currency">
          <p>{`R$ ${Number(buy).toFixed(2)}`}</p>
          <p>{`${percent.toFixed(2)}%`}</p>
        </div>
      </section>
    </Link>
  );
}

export default CardCurrency;
