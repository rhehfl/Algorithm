const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split('\n');

let count = 0;

for (let i = 1; i <= input[0]; i++) {
  const word = input[i];
  const seen = new Set();
  let isGroupWord = true;
  let prevChar = '';

  for (let i = 0; i < word.length; i++) {
    //이미 있는 값이고 이전값과 동일하다면
    if (seen.has(word[i]) && prevChar !== word[i]) {
      isGroupWord = false;
      break;
    }
    seen.add(word[i]);
    prevChar = word[i];
  }

  if (isGroupWord) count++;
}

console.log(count);
