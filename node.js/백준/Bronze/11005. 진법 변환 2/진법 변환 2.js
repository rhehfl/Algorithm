const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '입력값.txt')
  .toString()
  .trim()
  .split(' ');
console.log(decimalToBaseN(input[0], input[1]));

function decimalToBaseN(num, base) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let baseN = '';

  while (num > 0) {
    baseN = digits[num % base] + baseN;
    num = Math.floor(num / base);
  }

  return baseN || digits[0];
}
