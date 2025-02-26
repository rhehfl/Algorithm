const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ');

const setDice = new Set([...input]);

const calcMoney = (diceSize) => {
  if (diceSize === 1) {
    return 10000 + input[0] * 1000;
  }

  if (diceSize === 2) {
    if (input[0] === input[1]) {
      return 1000 + input[0] * 100;
    }
    return 1000 + input[2] * 100;
  }
  if (diceSize === 3) {
    return Math.max(...input) * 100;
  }
};

console.log(calcMoney(setDice.size));
