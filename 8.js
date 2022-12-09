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
  inp = inp.map(r => r.split('').map(r => parseInt(r)));
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  let a = rl.array.new(inp.length, 0).map(r => rl.array.new(inp.length, 0));
  
  for (let i = 0; i < inp.length; i++) {
    // for (let j = 1; j < inp[i].length - 1; j++) {
    //   let t = inp[i][j-1], b = inp[i][j+1], l = inp[i-1][j], r = inp[i+1][j];
    //   let p = inp[i][j];
    //   // if (p < Math.max())
    // }  
    // let j = i;
    // let t = inp[i][j-1], b = inp[i][j+1], l = inp[i-1][j], r = inp[i+1][j];
    // let p = inp[i][j];
    let mx = -1;
    for (let n = 0; n < inp.length; n++) {
      if (inp[i][n] > mx) {
        mx = inp[i][n];
        a[i][n] = 1;
      }
    }
    mx = -1;
    for (let n = 0; n < inp.length; n++) {
      if (inp[n][i] > mx) {
        mx = inp[n][i];
        a[n][i] = 1;
      }
    }
    mx = -1;
    for (let n = inp.length-1; n > 0; n--) {
      if (inp[i][n] > mx) {
        mx = inp[i][n];
        a[i][n] = 1;
      }
    }
    mx = -1;
    for (let n = inp.length-1; n > 0; n--) {
      if (inp[n][i] > mx) {
        mx = inp[n][i];
        a[n][i] = 1;
      }
    }
  }

  // console.log(a);
  return a.flat().filter(r => r === 1).length;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  let inp = inpArr;
  inp = inp.map(r => r.split('').map(r => parseInt(r)));
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  let a = rl.array.new(inp.length, 0).map(r => rl.array.new(inp.length, 0));
  
  for (let i = 0; i < inp.length; i++) {
    for (let j = 0; j < inp[i].length; j++) {

      // if (i !== 3 || j !== 2) continue;

      // let t = inp[i][j-1], b = inp[i][j+1], l = inp[i-1][j], r = inp[i+1][j];
      let p = inp[i][j];
      // if (p < Math.max())
      let t = 0, b = 0, l = 0, r = 0;
      for (let m = i+1; m < inp.length; m++) {
        b++; 
        if (inp[m][j] >= p) {
          break;
        }
      }
      for (let m = i-1; m >= 0; m--) {
        t++; 
        if (inp[m][j] >= p) {
          break;
        }
      }
      for (let m = j+1; m < inp.length; m++) {
        r++; 
        if (inp[i][m] >= p) {
          break;
        }
      }
      for (let m = j-1; m >= 0; m--) {
        l++; 
        // console.log(l, m);
        if (inp[i][m] >= p) {
          break;
        }
      }
      // console.log(i, j, '|', t, l, b, r);
      a[i][j] = t*l*b*r;
    }
  }

  // console.log(a);
  return Math.max(...a.flat());
}; 