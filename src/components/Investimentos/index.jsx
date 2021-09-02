import React, { useEffect, useState } from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getCurrencyApiCryptoQuery } from '../../services/requestApi';

import { converteInNumber } from '../../utils/functions';

import './style.css';

function Investimentos({ investiment }) {
  const {
    code, nome, currentValue, totalValue,
  } = investiment;

  const [currency, setCurrency] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCurrencyApiCryptoQuery(code);
      setCurrency(data.ticker);
    };
    fetchApi();
  }, []);

  const calculateGain = () => {
    const priceCurrency = converteInNumber(currency.buy);
    const pricePay = converteInNumber(currentValue);
    const totalPay = converteInNumber(totalValue);
    const result = priceCurrency * totalPay - pricePay;
    if (result >= 0) {
      return <span className="valor-positivo">{`+ R$ ${result.toFixed(2)}`}</span>;
    }
    return (
      <span className="valor-negativo">
        {`- R$ ${Math.abs(result.toFixed(2))}`}
      </span>
    );
  };

  return (
    <div className="content-investiments">
      <div className="content-info-currency">
        <p>{nome}</p>
        <span>{`${code} ${totalValue}`}</span>
      </div>
      <div className="content-value-prices">
        <p>{`R$ ${Number(currentValue).toFixed(2)}`}</p>
        {calculateGain()}
      </div>
      <Link to={`/wallet/sell/${code}`}>
        <RiMoneyDollarCircleFill className="icon-investimentos" />
      </Link>
    </div>
  );
}

export default Investimentos;
