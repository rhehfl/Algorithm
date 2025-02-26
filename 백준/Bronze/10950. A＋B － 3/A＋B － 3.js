const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [caseCount, ...numbers] = input;

for (let i = 0; i < caseCount; i++) {
  const [a, b] = numbers[i].split(' ');
  console.log(Number(a) + Number(b));
}
