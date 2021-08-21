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
  let array = [];
  // currencys.forEach((currency) => {
  //   const request = fetch(`https://www.mercadobitcoin.net/api/${currency}/ticker/`).then((response) => response.json())
  //   array.push(request);
  // })
  // const data = await Promise.all(array)
  // return data;
  for(let index = 0; index < currencys.length; index += 1) {
    const request = await fetch(`https://www.mercadobitcoin.net/api/${currencys[index]}/ticker/`);
    const data = await request.json();
    const myObj = {
      [currencys[index]]: data.ticker,
    }
    array.push(myObj)
  }
  return array;
};

const currencysPopular = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH']

export const getCurrencyCryptoPopular = async () => {
  let array = [];
  // currencys.forEach((currency) => {
  //   const request = fetch(`https://www.mercadobitcoin.net/api/${currency}/ticker/`).then((response) => response.json())
  //   array.push(request);
  // })
  // const data = await Promise.all(array)
  // return data;
  for(let index = 0; index < currencysPopular.length; index += 1) {
    const request = await fetch(`https://www.mercadobitcoin.net/api/${currencysPopular[index]}/ticker/`);
    const data = await request.json();
    const myObj = {
      [currencysPopular[index]]: data.ticker,
    }
    array.push(myObj)
  }
  return array;
};

export const getCurrencyApiCryptoQuery = async (query) => {
  const request = await fetch(`https://www.mercadobitcoin.net/api/${query}/ticker/`);
  const data = await request.json();
  return data;
};
