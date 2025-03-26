const [M, N] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const primes = [];

for (let i = M; i <= N; i++) {
  let isPrime = true;
  if (i === 1) continue;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}
const primesSum = primes.reduce((acc, cur) => acc + cur, 0);
if (primesSum <= 0) {
  console.log(-1);
} else {
  console.log(primesSum);
  console.log(Math.min(...primes));
}
