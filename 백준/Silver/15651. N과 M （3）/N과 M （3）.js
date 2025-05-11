const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const output = [];
let result = '';
function dfs(depth) {
  if (depth === M) {
    result += `${output.join(' ')}\n`;
    return;
  }
  for (let i = 1; i <= N; i++) {
    output.push(i);
    dfs(depth + 1);
    output.pop();
  }
}

dfs(0);
console.log(result);
