import { currencys } from '../data';

// Trybe Wallet
export const getCurrencyApi = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  return data;
};

export const getCurrencyApiQuery = async (query) => {
  const request = await fetch(`https://economia.awesomeapi.com.br/json/${query}`);
  const data = await request.json();
  return data;
};

// Api Mercado BitCoins

export const getCurrencyApiCrypto = async () => {
  const array = [];
  currencys.forEach(async (currency) => {
    const request = await fetch(`https://www.mercadobitcoin.net/api/${currency}/ticker/`);
    const data = await request.json();
    const myObj = {
      [currency]: data.ticker,
    };
    array.push(myObj);
  });
  return array;
};

const currencysPopular = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'AAVE'];

export const getCurrencyCryptoPopular = async () => {
  const array = [];
  currencysPopular.forEach(async (currency) => {
    const request = await fetch(`https://www.mercadobitcoin.net/api/${currency}/ticker/`);
    const data = await request.json();
    const myObj = {
      [currency]: data.ticker,
    };
    array.push(myObj);
  });
  const data = await Promise.all(array);
  return data;
};

export const getCurrencyApiCryptoQuery = async (query) => {
  const request = await fetch(`https://www.mercadobitcoin.net/api/${query}/ticker/`);
  const data = await request.json();
  return data;
};
