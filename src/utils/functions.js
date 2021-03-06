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
  const balanceClient = Number(storage.balance);
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
    balance: currencyUser.toFixed(2),
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

export const validadeGereneteCartao = (name, cvv, vencimento, conta) => {
  if (name.length < 10) return false;
  if (cvv.length !== 3) return false;
  if (!vencimento) return false;
  if (conta.length < 6) return false;
  return true;
};

export const validadeSaque = (value, conta, name, email, phone) => {
  const emailValidator = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);

  if (Number(value) <= 0) return false;
  if (conta.length < 6) return false;
  if (name.length < 10) return false;
  if (!emailValidator) return false;
  if (phone.length < 10) return false;
  return true;
};

export const validadeCadastro = (email, firstName, lastName, password, termos) => {
  const emailValidator = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);

  if (!emailValidator) return false;
  if (firstName.length < 3) return false;
  if (lastName.length < 3) return false;
  if (password.length < 8) return false;
  if (!termos) return false;

  return true;
};

export const classButtonsPay = (button) => {
  if (button === 'Cartao') {
    return {
      cartao: 'btn-active',
      boleto: 'btn-boleto',
      pix: 'btn-pix',
    };
  }
  if (button === 'Boleto') {
    return {
      cartao: 'btn-cartao',
      boleto: 'btn-active',
      pix: 'btn-pix',
    };
  }
  if (button === 'Pix') {
    return {
      cartao: 'btn-cartao',
      boleto: 'btn-boleto',
      pix: 'btn-active',
    };
  }
};
