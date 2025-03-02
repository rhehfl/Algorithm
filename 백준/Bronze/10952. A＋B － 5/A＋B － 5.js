const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

let result = '';

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const sum = a + b;
  if (sum) {
    result += sum + '\n';
  }
}

console.log(result);
