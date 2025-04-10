const [N, R, C] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let str1 = '',
  str2 = '';
const array1 = [],
  array2 = [];
for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    str1 += '.';
    str2 += 'v';
  } else {
    str1 += 'v';
    str2 += '.';
  }
}

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    array1.push(str1);
    array2.push(str2);
  } else {
    array2.push(str1);
    array1.push(str2);
  }
}

if (array1[R - 1][C - 1] === 'v') {
  array1.forEach((line) => console.log(line));
} else {
  array2.forEach((line) => console.log(line));
}
