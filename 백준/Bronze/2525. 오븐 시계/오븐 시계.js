const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split('\n');

const [startH, startM] = input[0].split(' ').map(Number);
const time = input[1];
const numberTime = Number(time);

const calcTime = () => {
  if (startM + numberTime < 60) {
    return console.log(startH, startM + numberTime);
  } else {
    const newH = Math.floor((startM + numberTime) / 60 + startH);
    const newM = (startM + numberTime) % 60;
    if (newH >= 24) {
      return console.log(newH - 24, newM);
    }
    return console.log(newH, newM);
  }
};
calcTime();
