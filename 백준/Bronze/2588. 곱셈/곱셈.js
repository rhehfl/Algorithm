const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');

const [a, b] = input;

const [hundred, ten, one] = String(b).split('');

const step1 = a * one;
const step2 = a * ten;
const step3 = a * hundred;

console.log(step1);
console.log(step2);
console.log(step3);
console.log(step1 + Number(step2 + '0') + Number(step3 + '00'));
