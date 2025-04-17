const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const hashMap = {};
for (let i = 1; i <= N; i++) {
  const currentStr = input[i].trim();
  if (currentStr.length >= M) {
    hashMap[currentStr] = (hashMap[currentStr] || 0) + 1;
  }
}
const arr = Object.entries(hashMap);

arr.sort((a, b) => {
  const valueDiff = b[1] - a[1];
  if (valueDiff !== 0) return valueDiff;
  const keyDiff = b[0].length - a[0].length;
  if (keyDiff !== 0) return keyDiff;

  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
});

console.log(arr.map((v) => v[0]).join('\n'));
