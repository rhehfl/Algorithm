const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m, v] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

const dfsVisited = Array(n + 1).fill(false);
const dfsResult = [];
const bfsVisited = Array(n + 1).fill(false);
const bfsResult = [];

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}
function dfs(node) {
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (const nextNode of graph[node]) {
    if (dfsVisited[nextNode]) continue;
    dfs(nextNode);
  }
}

function bfs(start) {
  const queue = [start];
  bfsVisited[start] = true;

  while (queue.length !== 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const next of graph[node]) {
      if (bfsVisited[next]) continue;
      bfsVisited[next] = true;
      queue.push(next);
    }
  }
}

dfs(v);
bfs(v);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
