const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'GDY/baekjoon/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim();
const K = Number(input);
// 4 7 44 47 74 77 444 447 474 477 777 4444 4447 4474 4477 4744
// 0
// 1
// 00
// 01
// 10
// 11
// 000
// 001
// 010
// 011
// 111
// 0000
// 0001
// 0010
// 0011
// 0100
// 0101
//

let binaryNum = (K + 1).toString(2);
binaryNum = binaryNum.slice(1);
let result = '';

for (let char of binaryNum) {
  result += char === '0' ? '4' : '7';
}
console.log(result);
