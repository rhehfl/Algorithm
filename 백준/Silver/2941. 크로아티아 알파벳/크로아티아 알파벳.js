const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();

const croatiaArray = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let newStr = input;
for (let i = 0; i < croatiaArray.length; i++) {
  newStr = newStr.split(croatiaArray[i]).join(' ');
}

console.log(newStr.length);
