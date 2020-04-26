const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let result;

const isLoginValid = function(login) {
  const elementArr = login.length >= 4 && login.length <= 16;
  return elementArr;
};

const isLoginUnique = function(allLogins, login) {
  const loginExistence = allLogins.indexOf(login);
  return loginExistence;
};

const addLogin = function(allLogins, login) {
  //   eslint-disable-next-line
  for (login of allLogins) {
    if (isLoginValid === false) {
      console.log('Ошибка! Логин должен быть от 4 до 16 символов');
      break;
    }

    if (isLoginUnique === true) {
      console.log('Такой логин уже используется!');
    }

    if (isLoginValid === true && isLoginUnique === false) {
      result = logins.push(login);
      console.log('Логин успешно добавлен!');
    }
  }

  return result;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
