const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();
console.log(Number(input) * 4);
