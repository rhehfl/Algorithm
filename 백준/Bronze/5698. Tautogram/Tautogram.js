const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const line = input[i].trim();
  if (line === '*') break; // 안전하게 처리
  console.log(isTautogram(line) ? 'Y' : 'N');
}

function isTautogram(str) {
  const words = str.split(/\s+/); // 공백 하나 이상으로 split
  const firstChar = words[0][0].toLowerCase();
  return words.every(word => word[0].toLowerCase() === firstChar);
}
