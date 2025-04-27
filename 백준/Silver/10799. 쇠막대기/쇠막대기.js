const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();
/**
 *
 *  1. () 가 있으면 자르기
 *  2. ( 가 나오면 스택에 push
 *  3. (다음에 )나오면 레이저  ( 를 pop
 *  4.
 *
 */

const stack = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
  //(일 경우 push
  if (input[i] === '(') {
    stack.push('(');
    continue;
  }
  //)일 경우
  if (input[i] === ')') {
    //1. 직전이 (일때 레이저
    if (input[i - 1] === '(') {
      stack.pop();
      count += stack.length;
      continue;
    }
    //2. 직전에 ) 일때 철근 끝남 => count + 1
    if (input[i - 1] === ')') {
      stack.pop();
      count += 1;
    }
  }
}
console.log(count);
