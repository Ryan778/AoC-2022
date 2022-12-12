// Day #

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

// First part
exports.silverStar = function(inpArr, inpStr) {
  // if (inpArr.length > 20) return 0;

  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  let s = new Set();
  // let o = {};
  // let a = [];
  
  let hx = 0, hy = 0, tx = 0, ty = 0;

  function follow() {

    if ((Math.abs(hx-tx) <= 1 && Math.abs(hy-ty) <= 1)) {
      return;
    }

    if (Math.abs(hx - tx) >= 2 && hy === ty) {
      tx += (hx > tx ? 1 : -1)
    } else if (Math.abs(hy - ty) >= 2 && hx === tx) {
      ty += (hy > ty ? 1 : -1)
    }
    else {
      if (hx > tx) {
        tx ++; 
      } else if (hx < tx) {
        tx --;
      }
      if (hy > ty) {
        ty ++
      } else if (hy < ty) {
        ty --;
      }
    }
    
    s.add(`${tx},${ty}`);
  }
  s.add(`${tx},${ty}`);

  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' ');
    // v = v.map(r => parseInt(r));
    let dm = {
      'R': [1, 0], 
      'U': [0, -1],
      'L': [-1, 0],
      'D': [0, 1]
    }
    
    let d = dm[v[0]];
    for (let i = 0; i < parseInt(v[1]); i++) {
      hx += d[0];
      hy += d[1];
      follow();
    }
      
  }

  // console.log(s);

  return s.size;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  // if (inpArr.length > 20) return 0;

  let inp = inpArr;
  let s = new Set();

  let rope = rl.array.new(10, [0, 0]).map(r => [0, 0]);


  function follow(j, i) {

    if ((Math.abs(rope[j][0]-rope[i][0]) <= 1 && Math.abs(rope[j][1]-rope[i][1]) <= 1)) {
      return;
    }
  
    if (Math.abs(rope[j][0] - rope[i][0]) >= 2 && rope[j][1] === rope[i][1]) {
      rope[i][0] += (rope[j][0] > rope[i][0] ? 1 : -1)
    } else if (Math.abs(rope[j][1] - rope[i][1]) >= 2 && rope[j][0] === rope[i][0]) {
      rope[i][1] += (rope[j][1] > rope[i][1] ? 1 : -1)
    }
    else {
      if (rope[j][0] > rope[i][0]) {
        rope[i][0] ++; 
      } else if (rope[j][0] < rope[i][0]) {
        rope[i][0] --;
      }
      if (rope[j][1] > rope[i][1]) {
        rope[i][1] ++
      } else if (rope[j][1] < rope[i][1]) {
        rope[i][1] --;
      }
    }
  
    s.add(`${rope[9][0]},${rope[9][1]}`);
  }

  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' ');
    // v = v.map(r => parseInt(r));
    let dm = {
      'R': [1, 0], 
      'U': [0, -1],
      'L': [-1, 0],
      'D': [0, 1]
    }
    
    let d = dm[v[0]];
    for (let i = 0; i < parseInt(v[1]); i++) {
      rope[0][0] += d[0];
      rope[0][1] += d[1];
      for (let v = 0; v < 9; v++) {
        follow(v, v+1);
      }
    }

    // console.log(rope);
      
  }

  // console.log(rope);
  return s.size;
    
    // s.add(`${tx},${ty}`);
  
}; 