// Day 13

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

function compare(p1, p2) {
  if (typeof p1 === 'number' && typeof p2 === 'number') {
    if (p1 < p2) {
      return true;
    } else if (p1 > p2) {
      return false;
    } else {
      return -1;
    }
  }

  if ((Array.isArray(p1) || Array.isArray(p2)) && !(Array.isArray(p1) && Array.isArray(p2))) {
    if (!Array.isArray(p1)) {
      p1 = [p1];
    } else {
      p2 = [p2];
    }
  }

  if (Array.isArray(p1) && Array.isArray(p2)) {
    // console.log(p1, p2, p1.length, p2.length)
    for (let w = 0; w < Math.min(p1.length, p2.length); w++) {
      let vl = compare(p1[w], p2[w]);
      if (vl === -1) {
        continue;
      } else {
        return vl;
      }
    }

    if (p1.length < p2.length) {
      return true;
    } else if (p1.length > p2.length) {
      return false;
    } else {
      return -1;
    }
  }
}

// function compare(p1, p2) {
//   let valid = true;

//   if ((Array.isArray(p1) || Array.isArray(p2)) && !(Array.isArray(p1) && Array.isArray(p2))) {
//     if (!Array.isArray(p1)) {
//       p1 = [p1];
//     } else {
//       p2 = [p2];
//     }
//   }

//   if (Array.isArray(p1) && Array.isArray(p2)) {
//     console.log(p1, p2, p1.length, p2.length)
//     // if (p1.length <= p2.length) {
//       let fnd = false;
//       for (let w = 0; w < Math.min(p1.length, p2.length); w++) {
//         let vl = compare(p1[w], p2[w]);
//         if (vl === -1) {
//           continue;
//         } else {
//           valid = vl; 
//           fnd = true;
//           break;
//         }
//         // if (!vl) valid = false;
//         // if (p1[w] > p2[w]) {
//         //   valid = false;
//         //   break;
//         // }
//       }
//       if (!fnd) {
//         return p1.length <= p2.length
//       }
//     // } else {
//     //   valid = false;
//     // }
//   } else {
//     if (p1 > p2) {
//       valid = false;
//     } else if (p1 === p2) {
//       return -1;
//     }
//   }

//   return valid;
// }

// First part
exports.silverStar = function(inpArr, inpStr) {
  // let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>eval(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  let ok = [];
  
  for (let i = 0; i < inp.length; i++) {
    let valid = true;
    let v = inp[i];
    // v = v.map(r => parseInt(r));
    valid = compare(v[0], v[1])
    // for (let n = 0; n < v[0].length; n++) {
    //   if (!valid) break;
    //   let p1 = v[0][n], p2 = v[1][n];

    //   valid = compare(p1, p2); 
    // }

    console.log(i+1, valid);
    if (valid) c += (i+1)
    // console.log(v);

      
  }

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  // let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>eval(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  let ok = [];
  let a = [[2]];
  let b = [[6]];
  ok.push(a);
  ok.push(b);
  
  for (let i = 0; i < inp.length; i++) {
    // let valid = true;
    let v = inp[i];
    
    ok.push(v[0]);
    ok.push(v[1]);
  }

  ok = ok.sort((a, b) => {
    return compare(a, b) ? -1 : 1
  });
  console.log(ok); 
  return (ok.indexOf(a)+1) * (ok.indexOf(b)+1)

}; 