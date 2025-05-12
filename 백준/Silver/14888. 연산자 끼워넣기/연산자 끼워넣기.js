const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const operatorCount = input[2].split(' ').map(Number);
const output = [];
function dfs(depth, result) {
  if (depth === N - 1) {
    output.push(result);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (!operatorCount[i]) continue;
    operatorCount[i]--;
    const calcReuslt = calculator(result, numbers[depth + 1], i);
    dfs(depth + 1, calcReuslt);
    operatorCount[i]++;
  }
}

function calculator(value1, value2, operator) {
  switch (operator) {
    case 0:
      return value1 + value2;
    case 1:
      return value1 - value2;
    case 2:
      return value1 * value2;
    case 3:
      return value1 < 0
        ? -Math.floor(-value1 / value2)
        : Math.floor(value1 / value2);
  }
}
dfs(0, numbers[0]);
console.log(`${Math.max(...output)}\n${Math.min(...output)}`);
