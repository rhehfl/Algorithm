const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const n = Number(input);
let result = '';
for (let i = n; i > 0; i--) {
  let row = '';

  for (let j = 1; j <= n; j++) {
    if (j >= i) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  result += row + '\n';
  row = '';
}
console.log(result);
