export const getCurrencyApi = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  return data;
};

// https://www.mercadobitcoin.net/api/BTC/ticker/