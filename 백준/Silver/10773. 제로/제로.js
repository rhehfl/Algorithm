const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n')
  .map((value) => Number(value.trim()));
class Stack {
  constructor() {
    this.arr = [];
  }
  pop() {
    return this.arr.pop();
  }
  push(value) {
    this.arr.push(value);
  }
  peek() {
    return this.arr.at(-1);
  }
}

const stack = new Stack();

for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    stack.pop();
    continue;
  }
  stack.push(input[i]);
}

console.log(sum(stack.arr));

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
