const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split(' ');

const [A, B, V] = input.map(Number);
console.log(Math.ceil((V - B) / (A - B)));
