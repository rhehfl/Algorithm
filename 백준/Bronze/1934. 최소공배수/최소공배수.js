const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');

//a % b => mod
//b % mod ...
//b % mod -> 0 => gcd = mod
// 48 18 12
// 18 12 6
// 12 6 0

function GCD(a, b) {
  if (a % b === 0) return b;
  return GCD(b, a % b);
}
function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  console.log(LCM(a, b));
}
