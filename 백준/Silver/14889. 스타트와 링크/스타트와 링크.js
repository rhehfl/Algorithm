const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const N2 = N / 2;
const result = [];
const people = Array.from({ length: N }, (_, i) => i + 1);

const S = [];
for (let i = 1; i <= N; i++) {
  S.push(input[i].trim().split(' ').map(Number));
}
const startTeam = [];

function getStatus(team) {
  sum = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      const a = team[i] - 1;
      const b = team[j] - 1;
      sum += S[a][b] + S[b][a];
    }
  }
  return sum;
}

function dfs(depth, start) {
  if (N2 === depth) {
    const linkTeam = people.filter((p) => !startTeam.includes(p));
    result.push(Math.abs(getStatus(startTeam) - getStatus(linkTeam)));
    return;
  }

  for (let i = start; i <= N; i++) {
    if (depth === 0 && i !== 1) continue;
    startTeam.push(i);
    dfs(depth + 1, i + 1);
    startTeam.pop();
  }
}

dfs(0, 1);

console.log(Math.min(...result));
