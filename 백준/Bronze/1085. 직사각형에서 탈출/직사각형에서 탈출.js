const [x, y, w, h] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ');

console.log(Math.min(...[w - x, h - y, x, y]));
