const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const M = Number(input);
let creator = 0;
for (let i = 0; i <= M; i++) {
  let sum = 0;
  const strNumber = String(i);
  for (let j = 0; j < strNumber.length; j++) {
    sum += Number(strNumber[j]);
  }
  if (sum + i === M) {
    creator = i;
    break;
  }
  sum = 0;
}

console.log(creator);
