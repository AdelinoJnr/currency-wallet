const codigo = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

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

export const randomCodigoPix = (length) => {
  const token = [];
  for (let index = 0; index < length; index += 1) {
    const randomIndex = (Math.random() * (codigo.length - 1)).toFixed(0);
    token[index] = codigo[randomIndex];
  }
  return token.join('');
};

export const validadeGereneteBolet = (name, email, cpf, phone) => {
  const emailValidator = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);

  if (name.length < 10) return false;
  if (!emailValidator) return false;
  if (cpf.length < 11) return false;
  if (phone.length < 10) return false;
  return true;
};
