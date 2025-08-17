const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'GDY/baekjoon/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const K = Number(input[0]);
const numArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const inequalitySign = input[1].trim().split(' ');

function signCheck(sign, prev, current) {
  if (sign === '>') return prev > current;
  if (sign === '<') return current > prev;
  return false;
}
let minAns = '';
let maxAns = '';
function dfs(depth, numbers) {
  if (depth === K + 1) {
    const numStr = numbers.join('');
    if (!minAns) minAns = numStr;
    maxAns = numStr;
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (numArray[i] === 0) continue;
    if (
      depth === 0 ||
      signCheck(inequalitySign[depth - 1], numbers[depth - 1], i)
    ) {
      numArray[i] = 0;
      dfs(depth + 1, [...numbers, i]);
      numArray[i] = 1;
    }
  }
}
dfs(0, []);

console.log(`${maxAns}\n${minAns}`);
