const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const tree = Array.from({ length: n + 1 }, () => []);

function dfs(root, destination, distance, visited, distanceArray) {
  if (visited[root]) return;
  visited[root] = true;
  distanceArray[root] = distance;
  if (root === destination) return;

  for (let i = 0; i < tree[root].length; i++) {
    const nextDistance = tree[root][i].distance;
    const next = tree[root][i].conn;

    if (visited[next]) continue;

    dfs(next, destination, distance + nextDistance, visited, distanceArray);
  }
}

for (let i = 1; i < n; i++) {
  const [a, b, c] = input[i].trim().split(' ').map(Number);
  tree[a].push({ distance: c, conn: b });
  tree[b].push({ distance: c, conn: a });
}

for (let i = n; i < n + m; i++) {
  const [start, end] = input[i].trim().split(' ').map(Number);
  const visited = new Array(n + 1).fill(false);
  const distanceArray = new Array(n + 1).fill(0);
  dfs(start, end, 0, visited, distanceArray);
  console.log(distanceArray[end]);
}
