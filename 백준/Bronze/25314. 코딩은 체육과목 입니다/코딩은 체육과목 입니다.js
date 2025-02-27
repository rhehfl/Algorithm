const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const lognCount = input / 4;
let long = '';
for (let i = 0; i < lognCount; i++) {
  long += 'long ';
}

console.log(long + 'int');
