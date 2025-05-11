const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
    .toString()
    .trim()
);

const board = Array.from({ length: N }, () => null);
let count = 0;

function dfs(row) {
  if (row === N) {
    count++;
    return;
  }
  for (let column = 0; column < N; column++) {
    if (checker(row, column)) {
      board[row] = column;
      dfs(row + 1);
      board[row] = null;
    }
  }
}

function checker(row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i] === col) return false;
    if (Math.abs(i - row) === Math.abs(board[i] - col)) return false;
  }
  return true;
}

dfs(0);
console.log(count);
