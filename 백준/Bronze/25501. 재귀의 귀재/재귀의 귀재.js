const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');

let callCount = 0;
for (let i = 1; i <= input[0]; i++) {
  console.log(isPalindrome(input[i].trim()), callCount);
  callCount = 0;
}
function recursion(str, frontIdx, rearIdx) {
  callCount++;
  if (frontIdx >= rearIdx) return 1;
  if (str[frontIdx] !== str[rearIdx]) return 0;
  return recursion(str, frontIdx + 1, rearIdx - 1);
}

function isPalindrome(str) {
  return recursion(str, 0, str.length - 1);
}
