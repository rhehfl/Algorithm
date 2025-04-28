const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

let dance = false;
const danceSet = new Set(['ChongChong']);

for (let i = 1; i <= input[0]; i++) {
  //총총이를 만난 후 부터는 전부 춤추게하기
  const [A, B] = input[i].trim().split(' ');
  //총총이를 만나버리면?
  if (A === 'ChongChong' || B === 'ChongChong') {
    //둘다 춤춰버림
    danceSet.add(A);
    danceSet.add(B);
    continue;
  }
  //춤추는 파티에 A 또는 B가 있다면
  if (danceSet.has(A) || danceSet.has(B)) {
    danceSet.add(A);
    danceSet.add(B);
  }
}
console.log(danceSet.size);
