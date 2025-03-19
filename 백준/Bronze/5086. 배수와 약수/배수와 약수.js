const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (a === 0 && b === 0) {
    return;
  }
  if (b % a === 0) {
    console.log('factor');
  } else if (a % b === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
}
