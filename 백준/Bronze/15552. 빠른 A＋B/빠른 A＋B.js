const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

let result = '';

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(' ');
  result += +a + +b + '\n';
}

console.log(result);
