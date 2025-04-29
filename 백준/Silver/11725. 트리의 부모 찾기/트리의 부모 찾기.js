const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');
const N = parseInt(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);
const parent = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a); // 양방향 연결
}
function dfs(current, parentNode) {
  parent[current] = parentNode;

  for (const next of graph[current]) {
    if (next !== parentNode) {
      dfs(next, current);
    }
  }
}

dfs(1, 0);

for (result of parent) {
  if (result) console.log(result);
}
