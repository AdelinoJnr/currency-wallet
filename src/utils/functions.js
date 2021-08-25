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

export const calculateBalanceValues = (storage) => {
  return storage.reduce((acc, curr) => {
    const totalValue = converteInNumber(curr.currentValue);
    return acc + totalValue;
  }, 0)
};

export const findToCurrency = (currencys, code) => {
  console.log(currencys, code);
  return currencys.find((currency) => Object.keys(currency)[0] === code)
};

const removeSellInvestiments = (code) => {
  const storage = JSON.parse(localStorage.getItem('investimentos'));
  const filetInvestiments = storage.filter((item) => item.code !== code)
  console.log(filetInvestiments);
  localStorage.setItem('investimentos', JSON.stringify(filetInvestiments));
};

export const currencyActivity = (valor, condicao, code) => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const balanceClient = Number(storage.elent);
  if(condicao === 'comprar' && balanceClient < valor) {
    return console.log("Dinheiro cobrado a mais do que o usuario tem em sua conta");
  }
  if (condicao === 'vender') removeSellInvestiments(code)

  const currencyUser = condicao === 'comprar'
    ? balanceClient - Number(valor)
    : balanceClient + Number(valor);
  console.log(currencyUser);
  const user = {
    ...storage,
    elent: currencyUser.toFixed(2),
  };
  localStorage.setItem('user', JSON.stringify(user));
  
};

// {
//   name: 'Barack Obama',
//   email: 'barackobama@gmail.com',
//   currency: 2845000.00,
// }