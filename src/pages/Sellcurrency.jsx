import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import HeaderBack from '../components/HeaderBack';
import Loading from '../components/Loading';
import { currencysNames } from '../data';

import { getCurrencyApiCryptoQuery } from '../services/requestApi';
import { converteInNumber } from '../utils/functions';
import { updateSellAndDeposit } from '../utils/historic';

function Sellcurrency({ match }) {
  const [currency, setCurrency] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState({});
  const [checkedInput, setCheckedInput] = useState(false);
  const { id } = match.params;
  const { buy } = currency;
  const { totalValue } = currentCurrency;

  const { userId } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCurrencyApiCryptoQuery(id);
      setCurrency(data.ticker);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const updateAtualCurrency = () => {
      const key = localStorage.getItem('investimentos');
      const storage = key ? JSON.parse(key) : [];
      const filter = storage.find((item) => item.code === id);
      setCurrentCurrency(filter);
    };
    updateAtualCurrency();
  }, []);

  const calculateValueGain = () => {
    const priceCurrency = converteInNumber(buy);
    const total = totalValue * priceCurrency;
    return total;
  };

  if (!currency) {
    return <Loading />;
  }

  return (
    <>
      <HeaderBack text="Vender" rota="/wallet" />
      <section className="content-sell-currency">

        <div className="content-info">
          <h4 className="title-3">{currencysNames[id]}</h4>
          <span>{`${id} - ${totalValue}`}</span>
        </div>

        <label className="label-info-sell" htmlFor="info">
          <input onClick={(ev) => setCheckedInput(ev.target.checked)} type="checkbox" id="info" />
          <p>Esse processo não pode ser revertido, se você realmente deseja, marque essa opção</p>
        </label>

        <div className="content-conversao">
          <p>Valor convertido</p>
          <span className="value-gain">
            {checkedInput ? `+ ${calculateValueGain().toFixed(2)} BRL` : '+ 0.00 BRL'}
          </span>
        </div>

        <Link to="" className="link-btn">
          <button
            disabled={!checkedInput}
            className="btn-acao btn-sell"
            type="button"
            onClick={() => updateSellAndDeposit(userId, {
              value: Number(calculateValueGain().toFixed(2)),
              code: id,
            }, 'vendas')}
          >
            Confirmar
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Sellcurrency;
