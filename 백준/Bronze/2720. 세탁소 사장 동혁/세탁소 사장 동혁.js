const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i <= input[0]; i++) {
  let change = Number(input[i]);
  const quarter = Math.trunc(change / 25);
  change = change % 25;

  const dime = Math.trunc(change / 10);
  change = change % 10;

  const nickel = Math.trunc(change / 5);
  change = change % 5;

  const penny = Math.trunc(change / 1);
  change = change % 1;

  console.log(quarter, dime, nickel, penny);
}
