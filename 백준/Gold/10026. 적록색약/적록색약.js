const { start } = require('repl');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const map = [];
const newMap = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let count = 0;
let count2 = 0;

for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split(''));
  newMap.push(
    input[i]
      .trim()
      .split('')
      .map((v) => (v === 'G' ? 'R' : v))
  );
}

function dfs(startX, startY, map) {
  const currentColor = map[startX][startY];
  map[startX][startY] = 'v';

  for (let i = 0; i < 4; i++) {
    const nx = startX + dx[i];
    const ny = startY + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if (map[nx][ny] === 'v') continue;

    const nextColor = map[nx][ny];
    if (currentColor === 'R' && nextColor === 'G') {
    }
    if (currentColor !== nextColor) continue;

    dfs(nx, ny, map);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] !== 'v') {
      dfs(i, j, map);
      count++;
    }
    if (newMap[i][j] !== 'v') {
      dfs(i, j, newMap);
      count2++;
    }
  }
}

console.log(count, count2);
