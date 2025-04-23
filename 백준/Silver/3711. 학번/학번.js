const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');

const N = input[0];
// n번학생 mod로 나눔
// n번학생들 나머지 비교
// 서로 다 다를 때 까지 반복
for (let i = 1; i <= N; i++) {
  const G = Number(input[1]);
  const testCase = input.splice(1, G + 1).map(Number);
  //나머지
  let m = 1;
  const modSet = new Set();
  while (true) {
    for (let j = 1; j <= testCase[0]; j++) {
      const studentNumber = Number(testCase[j]);
      //각 학생을 mod로 나눈 나머지값
      modSet.add(studentNumber % m);
    }
    if (testCase.length - 1 === modSet.size) break;
    modSet.clear();
    m++;
  }
  console.log(m);
}
