const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

let string = '';
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    string += input[j][i] ? input[j][i] : '';
  }
}
console.log(string);
