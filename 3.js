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
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' '), v0 = v[0];
    
    let a0 = v0.slice(0, v0.length / 2).split('');
    let a1 = v0.slice(v0.length / 2).split('');

    for (let ch of a0) {
      if (a1.indexOf(ch) !== -1) {
        let l = ch;
        let cc = l.charCodeAt(0);
        if (cc < 95) {
          // console.log(l, cc - 28)
          c += (cc - 38)
        } else {
          c += (cc - 96)
        }
        // console.log(a0, '> ', ch, ' > ', (cc-28));
        break;
      }
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
  
  for (let i = 0; i < inp.length; i+=3) {
    let v = inp[i].split(' '), v0 = v[0];
    
    let a0 = inp[i].split(''), a1 = inp[i+1].split(''), a2 = inp[i+2].split('');
    // let a0 = v0.slice(0, v0.length / 2).split('');
    // let a1 = v0.slice(v0.length / 2).split('');

    for (let ch of a0) {
      if (a1.indexOf(ch) !== -1 && a2.indexOf(ch) !== -1)  {
        let l = ch;
        let cc = l.charCodeAt(0);
        if (cc < 95) {
          // console.log(l, cc - 28)
          c += (cc - 38)
        } else {
          c += (cc - 96)
        }
        // console.log(a0, '> ', ch, ' > ', (cc-28));
        break;
      }
    }

  }

  return c;


}; 