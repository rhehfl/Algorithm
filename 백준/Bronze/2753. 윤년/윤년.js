const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString();

const year = Number(input);

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
