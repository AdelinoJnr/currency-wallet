import React from 'react';

function CardCurrency({ currency }) {
  const { code, codein, name, ask } = currency;

  const renderCurrency = turismo => {
    const currencyName = turismo
      ? `${name.split('/')[0]}/Turismo`
      : name.split('/')[0];
    return (
      <section className="content-currency">
        <div className="sigla-currency">{code}</div>
        <div className="nome-currency">{currencyName}</div>
        <div className="preco-currency">{Number(ask).toFixed(2)}</div>
      </section>
    );
  };

  if (codein === 'BRLT') {
    return renderCurrency(true);
  }

  return renderCurrency(false);
}

export default CardCurrency;
