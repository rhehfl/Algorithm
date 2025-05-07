const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const [N, M] = input[line++].split(' ').map(Number);
  const priorities = input[line++].split(' ').map(Number);

  const queue = priorities.map((priority, idx) => ({
    index: idx,
    priority,
  }));

  let count = 0;

  while (queue.length) {
    const current = queue.shift();

    const hasHigher = queue.some(doc => doc.priority > current.priority);
    if (hasHigher) {
      queue.push(current); // 뒤로 보내기
    } else {
      count++; // 인쇄
      if (current.index === M) {
        console.log(count);
        break;
      }
    }
  }
}
