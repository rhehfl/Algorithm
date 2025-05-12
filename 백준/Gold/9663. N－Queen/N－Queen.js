const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
    .toString()
    .trim()
);

const board = Array(N).fill(false);
let count = 0;
function dfs(row) {
  if (row === N) {
    count++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (checker(row, i, board)) {
      board[row] = i;
      dfs(row + 1);
      board[row] = null;
    }
  }
}

function checker(row, col, board) {
  for (let i = 0; i < row; i++) {
    //같은 열에 있는지 검사
    if (board[i] === col) return false;
    //같은 대각선상에 있는지 검사
    if (Math.abs(i - row) === Math.abs(board[i] - col)) return false;
  }
  return true;
}
dfs(0);

console.log(count);
