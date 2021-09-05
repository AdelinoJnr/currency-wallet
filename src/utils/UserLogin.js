const balance = 0;
const history = {
  deposito: [],
  saque: [],
  compras: [],
  vendas: [],
};

function updateKey(key, data) {
  const strData = JSON.stringify(data);
  localStorage.setItem(key, strData);
}

function genereteId(users) {
  const length = users.length !== 0 ? users.length + 1 : 1;
  return length;
}

export function initUsersKey() {
  const rawData = localStorage.getItem('users');
  if (!rawData) updateKey('users', []);
}

export function initUserKey() {
  const rawData = localStorage.getItem('user');
  if (!rawData) updateKey('user', {});
}

export function getUsers() {
  const rawData = localStorage.getItem('users');
  if (!rawData || !Array.isArray(JSON.parse(rawData))) {
    initUsersKey();
    return [];
  }
  const users = JSON.parse(rawData);
  return users;
}

export function userExists(email) {
  const users = getUsers();
  return users.some((user) => user.email === email);
}

export function authUser(email, password) {
  // if (!userExists(email)) throw Error('User does not exists');
  if (!userExists(email)) return alert('User does not exists');
  const user = getUsers().find((usr) => usr.email === email);
  return (user.email === email) && (user.password === password);
}

export function saveUser(name, password, email, avatarUser) {
  const users = getUsers();
  const userId = genereteId(users);
  const registerDate = Number(new Date());
  const newUser = {
    userId,
    name,
    password,
    email,
    avatar: avatarUser,
    balance,
    registerDate,
    history,
  };
  users.push(newUser);
  updateKey('users', users);
}

export function userAccess(email) {
  const users = getUsers();
  const user = users.find((e) => e.email === email);
  const createUser = {
    userId: user.userId,
    name: user.name,
    email: user.email,
    balance: user.balance,
    avatar: user.avatar,
    history: user.history,
  };
  localStorage.setItem('user', JSON.stringify(createUser));
}
