const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);

function dfs(currentNode, dfsGraph = graph, dfsVisited = visited) {
  dfsVisited[currentNode] = true;
  for (node of dfsGraph[currentNode]) {
    if (!dfsVisited[node]) {
      dfs(node, dfsGraph, dfsVisited);
    }
  }
}
for (let i = 2; i <= M + 1; i++) {
  const [a, b] = input[i].trim().split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

dfs(1);
console.log(visited.filter((val) => val).length - 1);
