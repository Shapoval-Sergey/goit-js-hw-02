const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let result;

const isLoginValid = function(login) {
  const elementArr =
    login.length >= 4 && login.length <= 16
      ? true
      : 'Ошибка! Логин должен быть от 4 до 16 символов';
  return elementArr;
};

const isLoginUnique = function(allLogins, login) {
  const loginExistence = allLogins.includes(login)
    ? 'Такой логин уже используется!'
    : false;
  return loginExistence;
};

const addLogin = function(allLogins, login) {
  console.log(isLoginValid('Ajax'));
  console.log(isLoginValid('robotGoogles'));
  console.log(isLoginValid('Zod'));
  console.log(isLoginValid('jqueryisextremelyfast'));

  console.log(isLoginUnique(logins, 'Ajax'));
  console.log(isLoginUnique(logins, 'robotGoogles'));
  console.log(isLoginUnique(logins, 'Zod'));
  console.log(isLoginUnique(logins, 'jqueryisextremelyfast'));

  allLogins.push(login);
  result = 'Логин успешно добавлен!';

  return result;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
