const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');
//각 단어는 공백으로 나뉨
// 공백을 기준으로 단어를 나누는 함수 => split 사용용
// 단어를 뒤집는 함수
//

for (let i = 1; i <= input[0]; i++) {
  const strArray = input[i].split(' ');
  const reverseStrArray = strArray.map((str) => {
    return reverseStr(str.trim());
  });
  console.log(reverseStrArray.join(' '));
}

function reverseStr(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
