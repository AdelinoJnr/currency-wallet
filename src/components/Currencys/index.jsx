import React, { useContext } from 'react';
import { CurrencyContext } from '../../store/Currency/currency';

import CardCurrency from '../CardCurrency';
import Loading from '../Loading';

import './style.css';

function Currencys() {
  const { currencyPopular } = useContext(CurrencyContext);

  const renderCurrencyCrypto = () => currencyPopular.map((currency) => (
    <CardCurrency key={Object.keys(currency)[0]} currency={currency} />
  ));

  return (
    <section>
      <h3 className="title-3 title-currency">Cripto Moedas</h3>
      {currencyPopular.length > 0 ? renderCurrencyCrypto() : <Loading /> }
    </section>
  );
}

export default Currencys;
