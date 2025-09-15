const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'GDY/baekjoon/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim();

const massMap = {
  H: 1,
  C: 12,
  O: 16,
};

const stack = [];
for (const char of input) {
  if (massMap[char]) stack.push(massMap[char]);

  if (char === '(') stack.push(char);

  if (!isNaN(char)) {
    const lastValue = stack.pop();
    stack.push(lastValue * Number(char));
  }

  if (char === ')') {
    let temp = 0;

    while (stack.at(-1) !== '(') {
      temp += stack.pop();
    }
    stack.pop();
    stack.push(temp);
  }
}

console.log(stack.reduce((prev, cur) => prev + cur, 0));
