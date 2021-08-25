import React, { useEffect, useState } from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getCurrencyApiCryptoQuery } from '../services/requestApi';

import { converteInNumber } from '../utils/functions';

function Investimentos({ investiment }) {
  const {
    buy, code, nome, currentValue, totalValue,
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
      return `+${result.toFixed(2)}`;
    }
    return result.toFixed(2);
  };

  return (
    <div className="content-investiments">
      <div className="content-info-currency">
        <p>{nome}</p>
        <div className="content-code-currency">
          <span>{code}</span>
          <span>{Number(buy).toFixed(2)}</span>
        </div>
      </div>
      <div className="content-value-prices">
        <p>{`${totalValue} ${code}`}</p>
        <p>{`${Number(currentValue).toFixed(2)} BRL`}</p>
        <span>{`${calculateGain()} BRL`}</span>
      </div>
      <Link to={`/wallet/sell/${code}`}>
        <RiMoneyDollarCircleFill className="icon-investimentos" />
      </Link>
    </div>
  );
}

export default Investimentos;
