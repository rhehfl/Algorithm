const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = Array.from({ length: N + 1 }, () => false);

const output = [];

function dfs(depth) {
  if (depth === M) {
    console.log(output.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    output.push(i);
    dfs(depth + 1);
    visited[i] = false;
    output.pop();
  }
}
dfs(0);
