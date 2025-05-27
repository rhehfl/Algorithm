const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const maze = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dist = Array.from({ length: N }, () => Array(M).fill(1));
for (let i = 1; i < input.length; i++) {
  maze.push(input[i].trim().split(''));
}

function bfs(startX, startY) {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    //인접 방문 가능 노드
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N) continue;
      if (ny < 0 || ny >= M) continue;

      if (maze[nx][ny] === '0') continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

bfs(0, 0);

console.log(dist[N - 1][M - 1]);
