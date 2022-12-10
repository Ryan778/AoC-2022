// Day #

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

// First part
exports.silverStar = function(inpArr, inpStr) {
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  let reg = {X: 1};
  let queue = [];
  // let a = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' ');
    // v = v.map(r => parseInt(r));

    if (v[0] === 'noop') {
      queue.push(null)
    } else if (v[0] === 'addx') {
      queue.push(null);
      queue.push(parseInt(v[1]));
    }

      
  }

  for (let j = 0; j < queue.length; j++) {
    if (j === 19 || j === 59 || j === 99 || j == 139 || j === 179 || j === 219) {
      console.log(reg.X);
      c += reg.X * (j+1)
    }
    
    if (queue[j] !== null) {
      reg.X += queue[j];
    }
  }

  // console.log(queue.slice(0, 20))
  console.log(reg.X, queue.length);

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;
  let disp = '';

  // let m = new Map();
  // let s = new Set();
  let reg = {X: 1};
  let queue = [];
  // let a = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' ');
    // v = v.map(r => parseInt(r));

    if (v[0] === 'noop') {
      queue.push(null)
    } else if (v[0] === 'addx') {
      queue.push(null);
      queue.push(parseInt(v[1]));
    }

      
  }

  for (let j = 0; j < queue.length; j++) {
    if (j === 19 || j === 59 || j === 99 || j == 139 || j === 179 || j === 219) {
      console.log(reg.X);
      c += reg.X * (j+1)
    }

    let pos = j % 40;
    if (pos === 0) {
      disp += '\n'
    }
    if (Math.abs(reg.X - pos) <= 1) {
      disp += '#'
    } else {
      disp += '.'
    }
    
    if (queue[j] !== null) {
      reg.X += queue[j];
    }
  }

  console.log(disp);

  return 0;
}; 