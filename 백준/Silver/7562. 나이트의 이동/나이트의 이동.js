const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split('\n');

let index = 1;
const dx = [1, -1, 1, -1, 2, 2, -2, -2];
const dy = [-2, -2, 2, 2, -1, 1, -1, 1];
class Queue {
  constructor(init) {
    this.array = new Array(init + 1);
    this.front = 0;
    this.rear = 0;
    this.len = init + 1;
  }

  isFull() {
    return (this.rear + 1) % this.len === this.front;
  }

  enqueue(value) {
    if (this.isFull()) return;
    this.array[this.rear] = value;
    this.rear = (this.rear + 1) % this.len;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const value = this.array[this.front];
    this.front = (this.front + 1) % this.len;
    return value;
  }
}

for (let i = 1; i <= input[0]; i++) {
  const I = Number(input[index++]);
  const board = Array.from({ length: I }, () => new Array(I).fill(0));
  const [curX, curY] = input[index++].trim().split(' ').map(Number);
  const [arrivalX, arrivalY] = input[index++].trim().split(' ').map(Number);
  bfs(curX, curY, board, I, arrivalX, arrivalY);
  console.log(board[arrivalX][arrivalY] - 1);
}

function bfs(curX, curY, board, I, arrivalX, arrivalY) {
  const queue = new Queue(I * I);
  queue.enqueue([curX, curY]);
  board[curX][curY] = 1;

  while (!queue.isEmpty()) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
      if (board[nx][ny] !== 0) continue;

      queue.enqueue([nx, ny]);
      board[nx][ny] = board[x][y] + 1;
      if (nx === arrivalX && ny === arrivalY) return;
    }
  }
}
