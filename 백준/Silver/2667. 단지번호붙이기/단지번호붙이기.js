const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const map = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let count = 0;
let houseCount = 0;
const result = [];

for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split('').map(Number));
}
function dfs(startX, startY) {
  if (map[startX][startY] !== 1) return;

  map[startX][startY] = 2;
  houseCount++;
  for (let i = 0; i < 4; i++) {
    const nx = startX + dx[i];
    const ny = startY + dy[i];
    if (nx < 0 || ny < 0 || nx > N - 1 || ny > N - 1) continue;

    dfs(nx, ny);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      count++;
      dfs(i, j);

      result.push(houseCount);

      houseCount = 0;
    }
  }
}

console.log(count + '\n' + result.sort((a, b) => a - b).join('\n'));
