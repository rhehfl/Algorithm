const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const str = reverseString(input);
console.log(str === input ? 1 : 0);

function reverseString(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += input[i];
  }
  return reverseStr;
}
