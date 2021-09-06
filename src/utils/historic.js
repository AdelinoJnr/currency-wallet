import { currencysNames } from '../data';

const moment = require('moment');

const STRING_DATE = 'DD MM YYYY hh:mm:ss';

export const getUsers = () => {
  const rawData = localStorage.getItem('users');
  if (!rawData || !Array.isArray(JSON.parse(rawData))) {
    return [];
  }
  const users = JSON.parse(rawData);
  return users;
};

export const getHistoric = (userId) => {
  const { history } = getUsers().find((e) => e.userId === userId);
  return history;
};

export const updateBuyAndSaque = (userId, action, key) => {
  const users = getUsers();
  const registerDate = Number(new Date());
  const newDeposit = {
    ...action,
    registerDate,
    type: key,
  };
  const modificSaque = users.map((e) => {
    if (userId === e.userId && action.value < e.balance) {
      const newUpdate = {
        ...e,
        balance: Number(e.balance) - Number(action.value),
        history: {
          ...e.history,
          [key]: [
            ...e.history[key],
            newDeposit,
          ],
        },
      };
      localStorage.setItem('user', JSON.stringify(newUpdate));
      return newUpdate;
    }
    return e;
  });
  localStorage.setItem('users', JSON.stringify(modificSaque));
};

export const updateSellAndDeposit = (userId, action, key) => {
  const users = getUsers();
  const registerDate = Number(new Date());
  const newDeposit = {
    ...action,
    registerDate,
    type: key,
  };
  const modificSaque = users.map((e) => {
    if (userId === e.userId) {
      const newUpdate = {
        ...e,
        balance: Number(e.balance) + Number(action.value),
        history: {
          ...e.history,
          [key]: [
            ...e.history[key],
            newDeposit,
          ],
        },
      };
      localStorage.setItem('user', JSON.stringify(newUpdate));
      return newUpdate;
    }
    return e;
  });
  localStorage.setItem('users', JSON.stringify(modificSaque));
};

export const getHistoryBuys = (userId) => {
  const users = getUsers();
  const { history } = users.find((e) => e.userId === userId);
  return history;
};

export const setHistoryUser = (userId, history) => {
  const users = getUsers();
  const modificHistory = users.map((e) => {
    if (e.userId === userId) {
      const newHistory = {
        ...e,
        history,
      };
      localStorage.setItem('user', JSON.stringify(newHistory));
      return newHistory;
    }
    return e;
  });
  localStorage.setItem('users', JSON.stringify(modificHistory));
};

export const removeCurrencySell = (userId, code) => {
  const history = getHistoryBuys(userId);
  const filterHistory = history.compras.filter((e) => e.code !== code);
  const newHistory = {
    ...history,
    compras: filterHistory,
  };
  setHistoryUser(userId, newHistory);
};

export const historyDeposito = ({ value, metodo, registerDate }) => `Deposito no valor de ${`R$ ${value.toFixed(2)}`}, com metodo ${metodo}, na data ${moment(new Date(registerDate), STRING_DATE)}`;

export const historySaque = ({ value, bank, registerDate }) => `Saque para o Banco ${bank}, no valor de ${`R$ ${value.toFixed(2)}`}, na data ${moment(new Date(registerDate), STRING_DATE)}`;

export const historyCompras = ({ code, value, registerDate }) => `Investimento na moeda ${currencysNames[code]}, no valor de ${`R$ ${value.toFixed(2)}`}, na data ${moment(new Date(registerDate), STRING_DATE)}`;

export const historyVendas = ({ code, value, registerDate }) => `Venda realizada no valor de ${`R$ ${value.toFixed(2)}`}, da moeda ${currencysNames[code]}, na data ${moment(new Date(registerDate), STRING_DATE)}`;
