const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const dan = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}
