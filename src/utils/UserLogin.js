function updateKey(key, data) {
  const strData = JSON.stringify(data);
  localStorage.setItem(key, strData);
}

export function initUserKey() {
  const rawData = localStorage.getItem('users');
  if (!rawData) updateKey('users', []);
}

export function getUsers() {
  const rawData = localStorage.getItem('users');
  if (!rawData || !Array.isArray(JSON.parse(rawData))) {
    initUserKey();
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
  if (!userExists(email)) throw Error('User does not exists');
  const user = getUsers().find((usr) => usr.email === email);
  return (user.email === email) && (user.password === password);
}

export function saveUser(name, password, email) {
  const users = getUsers();
  const registerDate = Number(new Date());
  const newUser = {
    name, password, email, registerDate,
  };
  users.push(newUser);
  updateKey('users', users);
}
