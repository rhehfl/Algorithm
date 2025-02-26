const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [x, n, ...priceAndNumbers] = input;

const totalPrice = priceAndNumbers.reduce((acc, cur) => {
  const [price, number] = cur.split(' ').map(Number);
  acc += price * number;
  return acc;
}, 0);

console.log(totalPrice == x ? 'Yes' : 'No');
