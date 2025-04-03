const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const white = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const black = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const [N, M] = input[0].split(' ').map(Number);
const countList = [];
for (let i = 1; i + 7 <= N; i++) {
  //input[1] ~ input[8]까지
  const board = input.slice(i, i + 8).map((value) => value.trim());
  for (let j = 0; j + 7 < M; j++) {
    const chessBoard = [];
    for (let k = 0; k < 8; k++) {
      chessBoard.push(board[k].slice(j, j + 8));
    }
    const whiteCount = checkBoard(white, chessBoard);
    const blackCount = checkBoard(black, chessBoard);
    countList.push(Math.min(whiteCount, blackCount));
  }
}
console.log(Math.min(...countList));
function checkBoard(board, board2) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== board2[i][j]) {
        count++;
      }
    }
  }
  return count;
}
