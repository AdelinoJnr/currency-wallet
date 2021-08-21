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

export const calculateBalanceValues = (key, array) => array.reduce((acc, curr) => {
  const value = converteInNumber(curr[key]);
  return acc + value;
}, 0);
