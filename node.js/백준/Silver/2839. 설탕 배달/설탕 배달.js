const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split(' ');
//
let N = Number(input[0]);
// 18 3 3 3 3 3 3
// 18 5 5 5 3
// 16 3 3 5 5
// 11 3 3 5

let kg5 = 0,
  kg3 = 0;
if (N % 5 === 0) {
  console.log(N / 5);
} else {
  while (N > 0) {
    N -= 3;
    kg3++;
    if (N % 5 === 0) {
      console.log(N / 5 + kg3);
      break;
    } else if (N < 0) {
      console.log(-1);
      break;
    }
    if (N === 0) {
      console.log(kg3);
      break;
    }
  }
}
