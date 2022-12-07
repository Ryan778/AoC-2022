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

  let m = new Map();
  let s = new Set();
  let o = {};
  let a = [];

  let st = inp[0].split('');
  for (let i = 3; i < st.length; i++) {
    s.clear();
    let n = st[i], p1 = st[i-1], p2 = st[i-2], p3 = st[i-3];
    s.add(n); s.add(p1); s.add(p2); s.add(p3);

    if(s.size === 4) {
      return i+1;
    }
    
  }
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));

    
    
  }

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  let m = new Map();
  let s = new Set();
  let o = {};
  let a = [];

  let st = inp[0].split('');
  for (let i = 3; i < st.length; i++) {
    s.clear();
    // let n = st[i], p1 = st[i-1], p2 = st[i-2], p3 = st[i-3];
    // s.add(n); s.add(p1); s.add(p2); s.add(p3);
    for (let jk = 0; jk < 14; jk++) {
      s.add(st[i-jk]);
    }

    if(s.size === 14) {
      return i+1;
    }
    
  }
}; 