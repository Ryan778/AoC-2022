// Day #

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

// First part
exports.silverStar = function(inpArr, inpStr) {

  // if (inpArr.length > 50) return 0;

  // let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  let inp = inpArr.join('\n').split('\n\n')

  // console.log(inp)
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  let m = new Map();
  let s = new Set();
  let o = {};
  let a = [];

  let st = inp[0].split('\n').map(r => r.split(''));
  for (let i = 1; i < st[st.length-1].length; i+=4) {
    let ind = Math.floor(i/4);
    if (!Array.isArray(a[ind])) {
      a[ind] = [];
    }
    for (let j = 0; j < st.length-1; j++) {
      let c = st[j][i];
      // console.log(i, c);
      if (st[j][i] !== undefined && st[j][i] !== ' '){
        a[ind].push(st[j][i])
      }
    }
  }
  
  // console.log(a);
  
  inp = inp[1].split('\n')
  for (let i = 0; i < inp.length; i++) {
    // let v = inp[i];
    let v = inp[i].split(' ');
    v = v.map(r => parseInt(r));
    
    // console.log(v);
    let num = v[1], fr = v[3], to = v[5];
    for (let i = 0; i < num; i++) {
      let res = a[fr-1].shift();
      a[to-1].unshift(res);
    }
    // console.log(a);
  }

  c = '';
  for (let i of a) {
    c += i[0];
  }
  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {

  // if (inpArr.length > 50) return 0;

  // let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  let inp = inpArr.join('\n').split('\n\n')

  // console.log(inp)
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  let m = new Map();
  let s = new Set();
  let o = {};
  let a = [];

  let st = inp[0].split('\n').map(r => r.split(''));
  for (let i = 1; i < st[st.length-1].length; i+=4) {
    let ind = Math.floor(i/4);
    if (!Array.isArray(a[ind])) {
      a[ind] = [];
    }
    for (let j = 0; j < st.length-1; j++) {
      let c = st[j][i];
      // console.log(i, c);
      if (st[j][i] !== undefined && st[j][i] !== ' '){
        a[ind].push(st[j][i])
      }
    }
  }
  
  // console.log(a);
  
  inp = inp[1].split('\n')
  for (let i = 0; i < inp.length; i++) {
    // let v = inp[i];
    let v = inp[i].split(' ');
    v = v.map(r => parseInt(r));
    
    // console.log(v);
    let num = v[1], fr = v[3], to = v[5];
    let stf = [];
    for (let i = 0; i < num; i++) {
      let res = a[fr-1].shift();
      stf.push(res);
    }
    a[to-1].unshift(...stf);
    // console.log(a);
  }

  c = '';
  for (let i of a) {
    c += i[0];
  }
  return c;
}; 