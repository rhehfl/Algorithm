const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString();

const numberInput = Number(input);

if (numberInput >= 90) {
  console.log('A');
} else if (numberInput >= 80) {
  console.log('B');
} else if (numberInput >= 70) {
  console.log('C');
} else if (numberInput >= 60) {
  console.log('D');
} else {
  console.log('F');
}
