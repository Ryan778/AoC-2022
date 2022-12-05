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
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));

    v = v.split(',').map(r => r.split('-').map(r => parseInt(r)));
    if (v[0][0] <= v[1][0] && v[0][1] >= v[1][1]) {
      c ++; 
    } else if (v[0][0] >= v[1][0] && v[0][1] <= v[1][1]) {
      c ++; 
    }
  }

  return c;
}; 

// console.log('z'.charCodeAt(0))

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
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));

    v = v.split(',').map(r => r.split('-').map(r => parseInt(r)));
    let n0 = v[0][0];
    let n1 = v[0][1];
    let o0 = v[1][0];
    let o1 = v[1][1];

    if (n1 < o0 || o1 < n0) {
      
    } else {
      c++;
    }
  }

  return c;

}; 