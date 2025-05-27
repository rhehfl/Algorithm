const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const days = Array.from({ length: N }, () => new Array(M).fill(0));
const farm = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let day = 0;
class Queue {
  constructor(size) {
    this.front = 0;
    this.rear = 0;
    this.array = new Array(size + 1);
    this.maxSize = size + 1;
  }
  enqueue(value) {
    if (this.isFull()) return;

    this.array[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
  }
  dequeue() {
    const value = this.array[this.front];
    this.front = (this.front + 1) % this.maxSize;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
  isFull() {
    return this.front === (this.rear + 1) % this.maxSize;
  }
}

for (let i = 1; i < input.length; i++) {
  farm.push(input[i].trim().split(' ').map(Number));
}

function bfs() {
  const queue = new Queue(Math.max(N * M));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (farm[i][j] === 1) {
        queue.enqueue([i, j]);
        visited[i][j] = true;
        days[i][j] = 1;
      }
      if (farm[i][j] === -1) {
        days[i][j] = -1;
      }
    }
  }

  while (!queue.isEmpty()) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (farm[nx][ny] === -1) continue;
      if (visited[nx][ny]) continue;
      visited[nx][ny] = true;
      queue.enqueue([nx, ny]);
      days[nx][ny] = days[x][y] + 1;

      if (days[nx][ny] > day) {
        day = days[nx][ny] - 1;
      }
    }
  }
}

bfs();

function checkFarm() {
  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < days[i].length; j++) {
      if (days[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

if (!checkFarm()) {
  console.log(-1);
} else {
  console.log(day);
}
