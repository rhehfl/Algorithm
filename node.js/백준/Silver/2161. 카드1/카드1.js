const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim();
//1... N
// N 버리기 N - 1을 맨위로

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    //새로운 노드 생성
    const newNode = new Node(value);
    //현재 끝 값 업데이트
    //a.next = b
    // a -> b -> c
    //링크 연결
    if (this.tail) {
      this.tail.next = newNode;
    }
    //마지막값은 현재값
    this.tail = newNode;
    //헤드 값이 없으면
    if (!this.head) this.head = newNode;
    this.length += 1;
  }
  dequeue() {
    //머리 값 없으면 null
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length -= 1;
    return value;
  }
  size() {
    return this.length;
  }
  peek() {
    if (!this.head) return null;
    return this.head.value;
  }
}
const queue = new Queue();
const printArray = [];
for (let i = 1; i <= input; i++) {
  queue.enqueue(i);
}
while (queue.size() > 1) {
  //위에 있는 카드 버리기
  printArray.push(queue.dequeue());
  queue.enqueue(queue.dequeue());
}

printArray.push(queue.dequeue());
console.log(printArray.join(' '));
