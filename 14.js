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

  let sandmap = [];
  let offX = 9e9, offY = 0, maxX = 0, maxY = 0;;
  let lines = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));

    v = v.split(' -> ').map(r => r.split(',').map(r => parseInt(r))).map(a => {
      offX = Math.min(a[0], offX);
      // offY = Math.min(a[1], offY);
      maxX = Math.max(a[0], maxX);
      maxY = Math.max(a[1], maxY);
      return a;
    });
    lines.push(v);
  }

  sandmap = new Array(maxY - offY + 1).fill(0).map(r => new Array(maxX - offX + 1).fill(0));

  // console.log(sandmap);
  // console.log(lines, offX, offY, maxX, maxY);

  for (let i = 0; i < lines.length; i++) {
    for (let l = 1; l < lines[i].length; l++) {
      let st = lines[i][l-1];
      let ed = lines[i][l];
      let sx = st[0], sy = st[1], ex = ed[0], ey = ed[1];
      if (sx === ex) {
        let yr = rl.array.range(sy, ey, 1);
        // console.log(st, ed, sy, ey, yr)
        for (let y of yr) {
          sandmap[y - offY][sx - offX] = '#';
        }
      } else {
        let xr = rl.array.range(sx, ex, 1);
        for (let x of xr) {
          sandmap[sy - offY][x - offX] = '#';
        }
      }
    }
  }

  let moresand = true;
  while (moresand) {
    let sx = 500 - offX, sy = 0 - offY;
    function placeSand(x, y) {
      if (y < sandmap.length && !sandmap[y+1][x]) {
        placeSand(x, y+1)
      } else if (y < sandmap.length && x > 0 && !sandmap[y+1][x-1]) {
        placeSand(x-1, y+1)
      } else if (y < sandmap.length && x < sandmap[0].length-1 && !sandmap[y+1][x+1]) {
        placeSand(x+1, y+1)
      } else if (!sandmap[y][x]) {
        if ((x === 0 || x === sandmap[0].length - 1)) {
          moresand = false;
        } else {
          sandmap[y][x] = 'o';
          c ++;
        }
      } else {
        moresand = false;
      }
    }
    placeSand(sx, sy);
  }

  console.log(sandmap.map(r => r.join('')).join('\n'));

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  let sandmap = [];
  let offX = 9e9, offY = 0, maxX = 0, maxY = 0;;
  let lines = [];
  
  for (let i = 0; i < inp.length; i++) {
    let v = inp[i];
    // v = v.map(r => parseInt(r));

    v = v.split(' -> ').map(r => r.split(',').map(r => parseInt(r))).map(a => {
      offX = Math.min(a[0], offX);
      // offY = Math.min(a[1], offY);
      maxX = Math.max(a[0], maxX);
      maxY = Math.max(a[1], maxY);
      return a;
    });
    lines.push(v);
  }

  maxX += 400;
  offX -= 400;
  maxY += 2;

  sandmap = new Array(maxY - offY + 1).fill(0).map(r => new Array(maxX - offX + 1).fill(0));

  let xr = rl.array.range(offX, maxX - offX + 800, 1);
  for (let x of xr) {
    sandmap[maxY][x - offX] = '#';
  }

  // console.log(sandmap);
  // console.log(lines, offX, offY, maxX, maxY);

  for (let i = 0; i < lines.length; i++) {
    for (let l = 1; l < lines[i].length; l++) {
      let st = lines[i][l-1];
      let ed = lines[i][l];
      let sx = st[0], sy = st[1], ex = ed[0], ey = ed[1];
      if (sx === ex) {
        let yr = rl.array.range(sy, ey, 1);
        // console.log(st, ed, sy, ey, yr)
        for (let y of yr) {
          sandmap[y - offY][sx - offX] = '#';
        }
      } else {
        let xr = rl.array.range(sx, ex, 1);
        for (let x of xr) {
          sandmap[sy - offY][x - offX] = '#';
        }
      }
    }
  }

  let moresand = true;
  while (moresand) {
    let sx = 500 - offX, sy = 0 - offY;
    function placeSand(x, y) {
      if (y < sandmap.length && !sandmap[y+1][x]) {
        placeSand(x, y+1)
      } else if (y < sandmap.length && x > 0 && !sandmap[y+1][x-1]) {
        placeSand(x-1, y+1)
      } else if (y < sandmap.length && x < sandmap[0].length-1 && !sandmap[y+1][x+1]) {
        placeSand(x+1, y+1)
      } else if (!sandmap[y][x]) {
        if ((x === 0 || x === sandmap[0].length - 1)) {
          moresand = false;
        } else {
          sandmap[y][x] = 'o';
          c ++;
        }
      } else {
        moresand = false;
      }
    }
    placeSand(sx, sy);
  }

  // console.log(sandmap.map(r => r.join('')).join('\n'));

  return c;
}; 