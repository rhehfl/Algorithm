const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim();

class Queue {
  constructor(size) {
    this.front = 0;
    this.rear = 0;
    this.size = size + 1;
    this.array = Array.from({ length: size + 1 }, () => 0);
  }
  dequeue() {
    if (this.isEmpty()) return;
    this.front = (this.front + 1) % this.size;
    return this.array[this.front];
  }
  enqueue(value) {
    //3 size 4
    // 0 1 2 3 반복
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.size;
    this.array[this.rear] = value;
  }
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  get length() {
    return (this.rear - this.front + this.size) % this.size;
  }
}
const queue = new Queue(Number(input));

for (let i = 1; i <= input; i++) {
  queue.enqueue(i);
}

while (queue.length > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.dequeue());
