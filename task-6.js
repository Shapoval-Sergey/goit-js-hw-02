let input;
const numbers = [];
let total = 0;
input = Number(input);
input = prompt('Введите число:');
numbers.push(input);
console.log(numbers);

//   eslint-disable-next-line
for (const number of numbers) {
  if (input === 0) {
    alert('Отменено пользователем!');
    break;
  } else if (Number.isNaN(number) === true) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total = numbers.join(', ');
    total += input;
    console.log(`Общая сумма чисел равна ${total}`);
  }
}
