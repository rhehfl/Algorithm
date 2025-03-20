const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const [N, K] = input.split(' ').map(Number);
let divisorCounter = 0;

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisorCounter++;
    if (divisorCounter === K) {
      console.log(i);
      return;
    }
  }
}
if (divisorCounter < K) {
  console.log(0);
}
