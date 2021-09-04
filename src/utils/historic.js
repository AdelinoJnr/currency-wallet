/* import { userAccess } from './UserLogin'; */

export const getUsers = () => {
  const rawData = localStorage.getItem('users');
  if (!rawData || !Array.isArray(JSON.parse(rawData))) {
    return [];
  }
  const users = JSON.parse(rawData);
  return users;
};

export const getHistoric = (userId) => {
  const { historic } = getUsers().find((e) => e.userId === userId);
  return historic;
};

export const updateBuyAndSaque = (userId, action, key) => {
  const users = getUsers();
  const registerDate = Number(new Date());
  const newDeposit = {
    ...action,
    registerDate,
  };
  const modificSaque = users.map((e) => {
    if (userId === e.userId) {
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
