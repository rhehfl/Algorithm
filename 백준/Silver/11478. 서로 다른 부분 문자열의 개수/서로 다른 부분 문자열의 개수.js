const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const strSet = new Set();
/**
 *  0 1 2 3 4
 *  01 12 23 34
 *  012 123 234
 *  0123 1234
 *  01234
 *
 *
 *  0 1 2 3 4
 *  0 1 2 3
 *  0 1 2
 *  0 1
 *  0
 */
let repeatLen = input.length;
let n = 1;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < repeatLen; j++) {
    strSet.add(input.slice(j, j + n));
  }
  repeatLen--;
  n++;
}
console.log(strSet.size);
