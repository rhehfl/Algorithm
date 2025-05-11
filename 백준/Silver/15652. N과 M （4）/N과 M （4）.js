const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const output = [];
let result = '';
function dfs(depth, start) {
  if (M === depth) {
    result += `${output.join(' ')}\n`;
    return;
  }
  for (let i = start; i <= N; i++) {
    output.push(i);
    dfs(depth + 1, i);
    output.pop();
  }
}

dfs(0, 1);
console.log(result);
