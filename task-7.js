const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  const elementArr = login.length >= 4 && login.length <= 16;
  return elementArr;
};

const isLoginUnique = function(allLogins, login) {
  const loginExistence = !allLogins.includes(login);

  return loginExistence;
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }

  if (isLoginValid(login) === true && isLoginUnique(login) === true) {
    allLogins.push(login);
    return 'Логин успешно добавлен!';
  }

  return addLogin(login);
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
