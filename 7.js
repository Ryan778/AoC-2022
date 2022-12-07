// Day 7

// Slow but very clean code :D
// Don't think I've ever used JS constructors before (but I heard of them prior, hence why I thought using them was a good idea)
// s/o to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

const rl = require('./rl-tools'); 
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

class Dir {
  constructor(n, p=null) {
    this.parent = p;
    this.name = n;
    this.children = [];
    this.files = [];
    this.size = 0;
    this.totalSize = -1;
  }

  addFile(name, size) {
    this.size += size;
    this.files.push([name, size]);
  }

  addChild(child) {
    let d = new Dir(child, this);
    this.children.push(d);
    return d;
  }

  child(name) {
    let c = this.children.find(r => r.name === name);
    if (c) {
      return c;
    } else {
      return this.addChild(name);
    }
  }
}

let allFolders = [];
function calcSize(dir) {
  if (dir.totalSize !== -1) {
    return dir.totalSize; // dp short-circuit
  }

  let t = 0; 
  for (let i of dir.children) {
    t += calcSize(i);
  }
  dir.totalSize = dir.size + t; 

  allFolders.push([dir.name, dir.totalSize]);

  return dir.totalSize;
}

// First part
exports.silverStar = function(inpArr, inpStr) {
  // if(inpArr.length < 30) return 0;
  allFolders = [];
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  let root = new Dir('/');
  let cur = root;
  let path = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' ');

    if (v[0] === '$') {
      v = v.slice(1);
    } else {
      let size = v[0], name = v[1];
      if (size === 'dir') {
        cur.addChild(name);
      } else {
        size = parseInt(size);
        cur.addFile(name, size);
      }
    }
    // v = v.map(r => parseInt(r));

    if (v[0] === 'cd') {
      if (v[1] === '/') {
        cur = root;
        path = [];
      } else if (v[1] === '..') {
        cur = (cur.parent?cur.parent:root);
        path = path.slice(0, path.length-1);
      } else {
        cur = cur.child(v[1]);
        path.push(v[1]);
      }
      // console.log(cur.name);
    } else if (v[0] === 'ls') {
      continue;
    }
      
  }

  calcSize(root);

  // console.log(root);
  // console.log(root.child('a'));

  // console.log(allFolders);
  for (let i of allFolders) {
    if (i[1] <= 100000) {
      c += i[1];
    }
  }

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  // if(inpArr.length < 30) return 0;
  allFolders = [];
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  let root = new Dir('/');
  let cur = root;
  let path = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i].split(' ');

    if (v[0] === '$') {
      v = v.slice(1);
    } else {
      let size = v[0], name = v[1];
      if (size === 'dir') {
        cur.addChild(name);
      } else {
        size = parseInt(size);
        cur.addFile(name, size);
      }
    }
    // v = v.map(r => parseInt(r));

    if (v[0] === 'cd') {
      if (v[1] === '/') {
        cur = root;
        path = [];
      } else if (v[1] === '..') {
        cur = (cur.parent?cur.parent:root);
        path = path.slice(0, path.length-1);
      } else {
        cur = cur.child(v[1]);
        path.push(v[1]);
      }
      // console.log(cur.name);
    } else if (v[0] === 'ls') {
      continue;
    }
      
  }

  calcSize(root);

  allFolders = allFolders.sort((a, b) => b[1] - a[1]);
  // console.log(allFolders);
  let tt = allFolders[0][1];
  let amtNeeded = 30000000 - (70000000 - tt);

  // console.log(amtNeeded);

  allFolders = allFolders.reverse();
  return allFolders.find(r => 
    r[1] > amtNeeded
  )[1];

  return c;
}; 