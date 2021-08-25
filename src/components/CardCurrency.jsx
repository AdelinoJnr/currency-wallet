import React from 'react';
import { Link } from 'react-router-dom';

import { currencysNames } from '../data';
import { converteInNumber } from '../utils/functions';

function CardCurrency({ currency }) {
  const code = Object.keys(currency);
  const { buy, last } = currency[code[0]];

  const calculatePercent = () => {
    const currencyBuy = converteInNumber(Number(buy).toFixed(2));
    const currencyLast = converteInNumber(Number(last).toFixed(2));
    const result = currencyBuy - currencyLast;
    const checked = result > 0 ? `+${result.toFixed(2)} R$` : `${result.toFixed(2)} R$`;
    return checked;
  };

  return (
    <Link to={`/${code[0]}`}>
      <section className="content-currency">
        <div className="nome-currency">
          <p>{currencysNames[code]}</p>
          <p>{code[0]}</p>
        </div>
        <div className="preco-currency">
          <p>{`R$ ${Number(buy).toFixed(2)}`}</p>
          <p>{calculatePercent()}</p>
        </div>
      </section>
    </Link>
  );
}

export default CardCurrency;
