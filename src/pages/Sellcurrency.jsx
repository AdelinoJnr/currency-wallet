import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Loading from '../components/Loading';
import Welcome from '../components/Welcome';

import { getCurrencyApiQuery } from '../services/requestApi';
import { converteInNumber } from '../utils/functions';

function Sellcurrency({ match }) {
  const [currency, setCurrency] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState({});
  const [quantSell, setQuantSell] = useState('');
  const [checkedInput, setCheckedInput] = useState(false);
  const { name, code, ask } = currency;
  const { currentValue } = currentCurrency;


  useEffect(() => {
    const fetchAPI = async () => {
      const { id } = match.params;
      const data = await getCurrencyApiQuery(id);
      setCurrency(data[0])
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const updateAtualCurrency = () => {
      const { id } = match.params;
      const key = localStorage.getItem('investimentos');
      const storage = key ? JSON.parse(key) : [];
      const filter = storage.find((item) => item.code === id);
      setCurrentCurrency(filter);
    };
    updateAtualCurrency();
  }, [])

  const handleOnChange = ({ target: { value } }) => {
    const typedInput = converteInNumber(currentValue);
    if (value > typedInput) {
      setQuantSell(typedInput)
    } else {
      setQuantSell(value)
    }
  };

  const calculateValueGain = () => {
    const priceCurrency = converteInNumber(ask);
    const total = quantSell * priceCurrency;
    return `+ ${total.toFixed(2)}`;
  };

  if (!currency) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <h3 className="title-login">Vender</h3>
      <section className="content-sell-currency">
        <div className="content-info">
          <h2>{name.split('/')[0]}</h2>
          <div className="content-sell-value">
            <span>{code}</span>
            <span>{currentValue}</span>
          </div>
        </div>
        <input className="input-sell" type="number" name="value" value={ quantSell } onChange={ handleOnChange } />
        <p className="value-gain">{calculateValueGain()}</p>
        <label className="label-info-sell" htmlFor="info">
          <input onClick={ (ev) => setCheckedInput(ev.target.checked) } type="checkbox" id="info" />
          Esse processo não pode ser revertido, se você realmente deseja, marque essa opção
        </label>
        <Link to="" className="link-btn">
          <button disabled={ !checkedInput } className="btn-padrao" type="button">Confirmar</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Sellcurrency;