const [N, K] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
//1 2 3 4 5 6 7 (원)
//    7 1 2 4 5

class Queue {
  constructor(size) {
    this.arr = Array.from({ length: size + 1 });
    this.size = size + 1;
    this.front = 0;
    this.rear = 0;
  }
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
  isEmpty() {
    return this.rear === this.front;
  }
  enqueue(value) {
    if (this.isFull()) {
      return;
    }
    this.rear = (this.rear + 1) % this.size;
    this.arr[this.rear] = value;
  }
  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    this.front = (this.front + 1) % this.size;
    return this.arr[this.front];
  }
  peek() {
    return this.arr[this.front];
  }
}

const queue = new Queue(N);
let seq = '<';

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

for (let i = 1; i <= N; i++) {
  for (let j = 0; j < K - 1; j++) {
    queue.enqueue(queue.dequeue());
  }
  if (i === N) {
    seq += queue.dequeue();
  } else {
    seq += queue.dequeue() + ', ';
  }
}
seq += '>';
console.log(seq);
