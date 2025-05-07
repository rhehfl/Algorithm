const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function kan(str) {
  if (str.length === 1) return str;
  const num = str.length / 3;
  const dashStr = str.slice(0, num);
  const spaceStr = ' '.repeat(num);

  return kan(dashStr) + spaceStr + kan(dashStr);
}

for (let i = 0; i < input.length; i++) {
  const n = Number(input[i].trim());
  const str = '-'.repeat(3 ** n);
  console.log(kan(str));
}
