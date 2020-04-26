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
    //   eslint-disable-next-line
    continue;
  }

  numbers.push(input);
}

if (numbers.length > 0) {
  //   eslint-disable-next-line
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
