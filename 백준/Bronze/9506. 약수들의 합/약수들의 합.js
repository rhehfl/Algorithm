const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let sum = 0;
  let divisor = '';
  for (let j = 1; j <= input[i]; j++) {
    if (input[i] % j === 0 && input[i] !== j) {
      sum += j;
      divisor += j + ' + ';
    }
  }

  if (sum === input[i]) {
    console.log(`${input[i]} = ${divisor.slice(0, -3)}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
  sum = 0;
  divisor = '';
}
