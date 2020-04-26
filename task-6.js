let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число:');

  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
  }

  if (Number.isNaN(input) === false) {
    numbers.push(input);
    total += input;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
