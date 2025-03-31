const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const [...numbers] = input[1].split(' ').map(Number);
let sumArrays = [];
//5 6 7 8 9 순회
let select1, select2, select3;
for (let i = 0; i < N; i++) {
  select1 = numbers[i];
  for (let j = i + 1; j < N; j++) {
    select2 = numbers[j];
    for (let k = j + 1; k < N; k++) {
      select3 = numbers[k];
      let sum = select1 + select2 + select3;
      if (sum <= M) {
        sumArrays.push(sum);
      }
    }
  }
}

console.log(Math.max(...sumArrays));
