const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();
const [string, jin] = input.split(' ');
console.log(parseInt(string, jin));
