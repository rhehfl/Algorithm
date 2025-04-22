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
  const strArray = str.split(/\s+/);
  const firstChar = strArray[0][0].toLowerCase();
  let bool = true;
  strArray.forEach((str) => {
    if (str[0].toLowerCase() !== firstChar) {
      bool = false;
    }
  });
  return bool;
}
