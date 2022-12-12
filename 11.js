// Day #

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

function bi(text) {
  text = text.split(' ');
  return [`BigInt(${text[0]})`, text[1], `BigInt(${text[2]})`].join(' ')
}

// Added after finishing part 2 to make both parts functional
function runRoundSilver(mkys) {
  for (let i = 0; i < mkys.length; i++) {
    let mky = mkys[i];
    // for (let j = 0; j < mky.items.length; j++) {
    while (mky.items.length > 0) {
      mkys[i].insp ++;
      let old = mky.items.shift();
      // console.log(i, j, old);
      old = eval(mky.op);
      // console.log(old); 
      old = Math.floor(old/3);
      if (old % mky.test === 0) {
        mkys[mky.tt].items.push(old);
      } else {
        mkys[mky.tf].items.push(old);
      }
    }
    // console.log(i, mkys);
  }
}

function runRound(mkys) {
  for (let i = 0; i < mkys.length; i++) {
    let mky = mkys[i];
    // for (let j = 0; j < mky.items.length; j++) {
    while (mky.items.length > 0) {
      mkys[i].insp ++;
      let old = mky.items.shift();
      old = old % 9699690;
      // console.log(i, j, old);
      old = eval(mky.op);
      // console.log(old); 
      // old = Math.floor(old/3);
      if (old % mky.test === 0) {
        mkys[mky.tt].items.push(old);
      } else {
        mkys[mky.tf].items.push(old);
      }
    }
    // console.log(i, mkys);
  }
}

// First part
exports.silverStar = function(inpArr, inpStr) {
  // return 10605;
  // let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n');
  let inp = inpArr.join('\n').split('\n\n');
  // return;
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  // let a = [];
  let mky = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));
    v = v.split('\n');
    mky.push({
      items: v[1].slice(17).split(',').map(r => parseInt(r)),
      op: v[2].slice(19),
      test: parseInt(v[3].match(/[0-9]+/g)),
      tt: parseInt(v[4].match(/[0-9]+/g)),
      tf: parseInt(v[5].match(/[0-9]+/g)),
      insp: 0,
    });
  }

  // console.log(inp);
  // console.log(mky);
  for (let i = 0; i < 20; i++) {
    runRoundSilver(mky);
    // if (i % 10 === 0) console.log(i);
  }
  
  let insp = mky.map(r => r.insp).sort((a, b) => b-a);
  console.log(insp);
  return insp[0] * insp[1];

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  // let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n');
  let inp = inpArr.join('\n').split('\n\n');
  // return;
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  // let a = [];
  let mky = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));
    v = v.split('\n');
    mky.push({
      items: v[1].slice(17).split(',').map(r => parseInt(r)),
      op: v[2].slice(19),
      test: parseInt(v[3].match(/[0-9]+/g)),
      tt: parseInt(v[4].match(/[0-9]+/g)),
      tf: parseInt(v[5].match(/[0-9]+/g)),
      insp: 0,
    });
      
  }

  // console.log(inp);
  // console.log(mky);
  for (let i = 0; i < 10000; i++) {
    runRound(mky);
    // if (i % 10 === 0) console.log(i);
  }
  
  let insp = mky.map(r => r.insp).sort((a, b) => b-a);
  console.log(insp);
  return insp[0] * insp[1];

  return c;
}; 