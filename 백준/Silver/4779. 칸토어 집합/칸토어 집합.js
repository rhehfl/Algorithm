const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

function kan(str) {
  if (str.length <= 1) return str;

  const partLen = Math.floor(str.length / 3);
  const left = str.slice(0, partLen);
  const center = ' '.repeat(partLen);
  const right = str.slice(partLen * 2);

  return kan(left) + center + kan(right);
}

for (let i = 0; i < input.length; i++) {
  const n = Number(input[i]);
  if (isNaN(n)) continue;

  const line = '-'.repeat(3 ** n);
  console.log(kan(line));
}
