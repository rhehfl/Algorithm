const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

if (x < 0) {
  if (y < 0) {
    console.log(3);
  } else {
    console.log(2);
  }
} else {
  if (y < 0) {
    console.log(4);
  } else {
    console.log(1);
  }
}
