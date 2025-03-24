const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const primeNumbers = input[1].split(' ').map(Number);
let primeCount = 0;

for (let i = 0; i < input[0]; i++) {
  const num = primeNumbers[i];

  if (num === 1) continue;

  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) primeCount++;
}

console.log(primeCount);
