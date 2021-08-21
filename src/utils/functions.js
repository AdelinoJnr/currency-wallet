export const updateLocalStorage = (key, value) => {
  const chave = localStorage.getItem(key);
  const checkedStorage = chave ? JSON.parse(chave) : false;
  console.log(checkedStorage);
  if (checkedStorage) {
    localStorage.setItem(key, JSON.stringify([...checkedStorage, value]));
    return console.log('Ja tinha algo');
  }
  localStorage.setItem(key, JSON.stringify([value]));
};

export const converteInNumber = (stringNumber) => {
  return Number(stringNumber);
};

export const calculateBalanceValues = (key, storage) => {
  return storage.reduce((acc, curr) => {
    const totalValue = converteInNumber(curr[key]);
    const priceBuy = converteInNumber(curr.buy);
    const result = totalValue * priceBuy;
    return acc + result;
  }, 0)
};

export const findToCurrency = (currencys, code) => {
  console.log(currencys, code);
  return currencys.find((currency) => Object.keys(currency)[0] === code)
};
