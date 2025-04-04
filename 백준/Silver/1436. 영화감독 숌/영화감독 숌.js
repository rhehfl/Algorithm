const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();
//666이 들어가는 숫자중에  n번째
//666부터 하나씩 증가시키기
//666이 등장하면 카운트를 증가시킴
// 카운트와 n번과 비교하여 맞으면 탈출
let count = 1;
let number = 666;

while (true) {
  if (check666(number)) {
    //666포함시
    //현재 카운트랑 n이랑 비벼보기기
    if (count === Number(input)) {
      break;
    }
    count++;
  }

  number++;
}

console.log(number);
function check666(num) {
  return /666/.test(String(num));
}
