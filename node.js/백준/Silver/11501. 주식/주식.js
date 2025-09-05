const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'GDY/baekjoon/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');
class Queue {
  constructor(size) {
    this.array = new Array(size + 1).fill(null);
    this.front = 0;
    this.rear = 0;
    this.maxSize = size + 1;
  }
  enqueue(value) {
    this.array[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
  }
  dequeue() {
    const returnValue = this.array[this.front];
    this.front = (this.front + 1) % this.maxSize;
    return returnValue;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  getCurrentValue() {
    return this.array[this.front];
  }
}
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [N, numbers] = input.splice(1, 2);
  const stockPrices = numbers.trim().split(' ').map(Number).reverse();
  let money = 0;

  let maxPrice = stockPrices[0];
  for (let i = 0; i < N - 1; i++) {
    const nextPrice = stockPrices[i + 1];

    if (maxPrice > nextPrice) {
      money += maxPrice - nextPrice;
    } else {
      maxPrice = nextPrice;
    }
  }

  console.log(money);
}
