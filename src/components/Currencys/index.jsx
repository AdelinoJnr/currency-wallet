import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { CurrencyContext } from '../../store/Currency/currency';
import { currencysNames } from '../../data';

import CardCurrency from '../CardCurrency';
import Loading from '../Loading';
import Atualizar from '../Atualizar';

import './style.css';

function Currencys() {
  const { currencyPopular, currencyCrypto } = useContext(CurrencyContext);
  const [nameFilter, setNameFilter] = useState('');

  const selectOptions = Object.keys(currencysNames).map((code) => {
    const optionObject = { value: code, label: code };
    return optionObject;
  });

  const filteredOptions = currencyCrypto?.filter((c) => {
    const code = Object.keys(c)[0];
    return currencysNames[code].toLowerCase().includes(nameFilter) || code === nameFilter;
  });

  const renderCurrencyPopular = () => currencyPopular.map((currency) => (
    <CardCurrency key={Object.keys(currency)[0]} currency={currency} />
  ));

  const renderFilteredCoins = () => filteredOptions.map((o) => {
    if (currencyPopular.length < 0) return <Loading />;
    return <CardCurrency key={Object.keys(o)[0]} currency={o} />;
  });

  return (
    <section className="currencys">
      <div className="search-block">
        <div className="input-block">
          <input placeholder="Pesquisar" type="text" onChange={(e) => setNameFilter(e.target.value)} />
          <p>{ nameFilter.length > 0 ? nameFilter : 'Pesquisa por uma moeda' }</p>
        </div>
        <Select className="select-content code-selector" options={selectOptions} onChange={(e) => setNameFilter(e.value)} />
      </div>
      <div className="content-atualizar">
        <h3 className="title-3 title-currency">Cripto Moedas</h3>
        <Atualizar />
      </div>
      { nameFilter.length > 0 ? renderFilteredCoins() : renderCurrencyPopular() }
    </section>
  );
}

export default Currencys;
