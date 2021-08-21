import React from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { converteInNumber } from '../utils/functions';

function Investimentos({ currency, investiment }) {
  const {
    ask, code, name, currentValue, totalValue,
  } = investiment;

  const calculateGain = () => {
    const priceCurrency = converteInNumber(currency[code].ask);
    const pricePay = converteInNumber(currentValue);
    const current = converteInNumber(totalValue);
    const result = priceCurrency * pricePay - current;
    if (result >= 0) {
      return `+${result.toFixed(2)}`;
    }
    return result.toFixed(2);
  };

  return (
    <div className="content-investiments">
      <div className="content-info-currency">
        <p>{name.split('/')[0]}</p>
        <div className="content-code-currency">
          <span>{code}</span>
          <span>{ask}</span>
        </div>
      </div>
      <div className="content-value-prices">
        <p>{totalValue}</p>
        <span>{calculateGain()}</span>
      </div>
      <Link to={`/wallet/sell/${code}`}>
        <RiMoneyDollarCircleFill className="icon-investimentos" />
      </Link>
    </div>
  );
}

export default Investimentos;
