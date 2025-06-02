const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input[0].trim().split(' ').map(Number);
const map = Array.from({ length: N }, () => new Array(M).fill(0));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const result = [];
let areaCount = 0,
  areaSizeCount = 0;

for (let i = 1; i <= K; i++) {
  const [sy, sx, ey, ex] = input[i].trim().split(' ').map(Number);

  for (let j = sx; j < ex; j++) {
    for (let k = sy; k < ey; k++) {
      map[j][k] = 1;
    }
  }
}
function dfs(startX, startY) {
  map[startX][startY] = 1;
  areaSizeCount++;
  for (let i = 0; i < 4; i++) {
    const nx = startX + dx[i];
    const ny = startY + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (map[nx][ny] === 1) continue;

    dfs(nx, ny);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) {
      dfs(i, j);
      areaCount++;
      result.push(areaSizeCount);
      areaSizeCount = 0;
    }
  }
}
console.log(areaCount + '\n' + result.sort((a, b) => a - b).join(' '));
