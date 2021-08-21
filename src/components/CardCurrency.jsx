import React from 'react';
import { Link } from 'react-router-dom';

function CardCurrency({ currency }) {
  const {
    code, codein, name, ask, high,
  } = currency;
  const percent = 100 - ((ask * 100) / high);

  const renderCurrency = (turismo) => {
    const currencyName = turismo
      ? `${name.split('/')[0]}/Turismo`
      : name.split('/')[0];
    return (
      <Link to={`/${code}`}>
        <section className="content-currency">
          <div className="nome-currency">
            <p>{currencyName}</p>
            <p>{turismo ? 'USDT' : code}</p>
          </div>
          <div className="preco-currency">
            <p>{`R$ ${Number(ask).toFixed(2)}`}</p>
            <p>{`${percent.toFixed(2)}%`}</p>
          </div>
        </section>
      </Link>
    );
  };

  if (codein === 'BRLT') {
    return renderCurrency(true);
  }

  return renderCurrency(false);
}

export default CardCurrency;
