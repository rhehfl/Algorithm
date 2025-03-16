const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const moneyCase = {
  quarter: 0,
  dime: 0,
  nickel: 0,
  penny: 0,
};

for (let i = 1; i <= input[0]; i++) {
  let change = Number(input[i]);
  moneyCase.quarter = Math.trunc(change / 25);
  change = change % 25;

  moneyCase.dime = Math.trunc(change / 10);
  change = change % 10;

  moneyCase.nickel = Math.trunc(change / 5);
  change = change % 5;

  moneyCase.penny = Math.trunc(change / 1);
  change = change % 1;

  console.log(...Object.values(moneyCase));
}
