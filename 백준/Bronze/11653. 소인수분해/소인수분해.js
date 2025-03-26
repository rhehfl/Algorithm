let number = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

for (let i = 2; i <= Math.sqrt(number); i++) {
  while (number % i === 0) {
    console.log(i);
    number = number / i;
  }
}
if (number > 1) {
  console.log(number);
}
