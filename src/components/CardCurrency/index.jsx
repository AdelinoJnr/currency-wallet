import React from 'react';
import { Link } from 'react-router-dom';

import { currencysNames } from '../../data';
import { converteInNumber } from '../../utils/functions';

import './style.css';

function CardCurrency({ currency }) {
  const code = Object.keys(currency);
  const { buy, last } = currency[code[0]];

  const calculatePercent = () => {
    const currencyBuy = converteInNumber(Number(buy).toFixed(2));
    const currencyLast = converteInNumber(Number(last).toFixed(2));
    const result = currencyBuy - currencyLast;
    if (result < 0) {
      return (
        <span className="valor-negativo">
          {`- R$ ${Math.abs(Number(result).toFixed(2))}`}
        </span>
      );
    }
    return (
      <span className="valor-positivo">{`+ R$ ${Number(result).toFixed(2)}`}</span>
    );
  };

  return (
    <Link className="link-currency-detalhes" to={`/${code[0]}`}>
      <section className="content-currency">
        <p>{`${currencysNames[code]} - ${code[0]}`}</p>
        <div className="preco-currency">
          <p>{`R$ ${Number(buy).toFixed(2)}`}</p>
          {calculatePercent()}
        </div>
      </section>
    </Link>
  );
}

export default CardCurrency;
