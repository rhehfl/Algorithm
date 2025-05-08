const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = Array(N + 1).fill(false);
const output = [];
let result = '';

function dfs(depth = 0, start = 1) {
  if (depth === M) {
    result += `${output.join(' ')}\n`;
    return;
  }
  for (let i = start; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    output.push(i);
    dfs(depth + 1, i);
    output.pop();
    visited[i] = false;
  }
}
dfs();
console.log(result);
