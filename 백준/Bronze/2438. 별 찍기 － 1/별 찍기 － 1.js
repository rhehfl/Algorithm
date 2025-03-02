const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

let result = '';

for (let i = 1; i <= input; i++) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  result += row + '\n';
  row = '';
}

console.log(result);
