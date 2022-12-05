// Day #

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

// First part
exports.silverStar = function(inpArr, inpStr) {
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  let inp = inpArr;
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  let maps = {
    'A': 0,
    'X': 0,
    'B': 1,
    'Y': 1,
    'C': 2,
    'Z': 2
  }
  

  
  for (let i = 0; i < inp.length; i++) {
    let ts = inp[i].split(' ');
    // console.log(ts);

    c += maps[ts[1]];
    c ++;

    if (maps[ts[0]] === maps[ts[1]]) {
      c += 3;
    } else if ((maps[ts[1]] - maps[ts[0]] === 1) || (maps[ts[1]] - maps[ts[0]] === -2)) {
      c += 6;
    }

  }

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  let inp = inpArr;
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  let maps = {
    'A': 0,
    'X': 0,
    'B': 1,
    'Y': 1,
    'C': 2,
    'Z': 2
  }
  

  
  for (let i = 0; i < inp.length; i++) {
    let ts = inp[i].split(' ');
    // console.log(ts);

    let res = ts[1];
    c ++;
    if (ts[1] === 'X') {
      c += 0;
      c += (maps[ts[0]] - 1 < 0 ? 2 : maps[ts[0]] - 1);
    } else if (ts[1] === 'Y') {
      c += 3;
      c += maps[ts[0]];
    } else {
      c += 6;
      c += (maps[ts[0]] + 1 > 2 ? 0 : maps[ts[0] ] + 1);
    }


    // c += maps[ts[1]];
    // c ++;

    // if (maps[ts[0]] === maps[ts[1]]) {
    //   c += 3;
    // } else if ((maps[ts[1]] - maps[ts[0]] === 1) || (maps[ts[1]] - maps[ts[0]] === -2)) {
    //   c += 6;
    // }

  }

  return c;
}; 