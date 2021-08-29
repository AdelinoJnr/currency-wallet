export const updateLocalStorage = (key, value) => {
  const chave = localStorage.getItem(key);
  const checkedStorage = chave ? JSON.parse(chave) : false;
  if (checkedStorage) {
    localStorage.setItem(key, JSON.stringify([...checkedStorage, value]));
    return console.log('Ja tinha algo');
  }
  localStorage.setItem(key, JSON.stringify([value]));
};

export const converteInNumber = (stringNumber) => Number(stringNumber);

export const calculateBalanceValues = (storage) => storage.reduce((acc, curr) => {
  const totalValue = converteInNumber(curr.currentValue);
  return acc + totalValue;
}, 0);

export const findToCurrency = (currencys, code) => {
  console.log(currencys, code);
  return currencys.find((currency) => Object.keys(currency)[0] === code);
};

const removeSellInvestiments = (code) => {
  const storage = JSON.parse(localStorage.getItem('investimentos'));
  const filetInvestiments = storage.filter((item) => item.code !== code);
  localStorage.setItem('investimentos', JSON.stringify(filetInvestiments));
};

const mensageError = 'Dinheiro cobrado a mais do que o usuario tem em sua conta';

export const currencyActivity = (valor, condicao, code) => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const balanceClient = Number(storage.elent);
  if (condicao === 'comprar' && balanceClient < valor) {
    return console.log(mensageError);
  }
  if (condicao === 'vender') removeSellInvestiments(code);

  const currencyUser = condicao === 'comprar' || condicao === 'sacar'
    ? balanceClient - Number(valor)
    : balanceClient + Number(valor);
  console.log(currencyUser);
  const user = {
    ...storage,
    elent: currencyUser.toFixed(2),
  };
  localStorage.setItem('user', JSON.stringify(user));
};
