// Day #

const rl = require('./rl-tools'); 
const cytoscape = require('cytoscape');
// Important, commonly used functions
const range = rl.array.range; 
Array.prototype.sum = function() {
  return rl.array.sum(this);
}; 

class Node {
  constructor(e) {
    edges: e
  }
}


// First part
exports.silverStar = function(inpArr, inpStr) {
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  let map = [];
  let nodes = [];
  let start, end;
  
  map = inp.map(r => r.split(''));
  nodes = inp.map(r => r.split('').map(r => []));

  let cy = cytoscape();

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      // console.log(i, j)
      cy.add({group: 'nodes', data: {id: `${i},${j}`}})
    }
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      let pos = map[i][j];
      let u = map[i]?.[j-1], d = map[i]?.[j+1], l = map[i-1]?.[j], r = map[i+1]?.[j];
      let ele = pos.charCodeAt(0);
      if (pos === 'S') {
        ele = 'a'.charCodeAt(0);
        start = [i, j];
      } else if (pos === 'E') {
        ele = 'z'.charCodeAt(0);
        end = [i, j];
      }

      let edges = [];
      if (u && (u.charCodeAt(0) !== 'E'.charCodeAt(0) ? u.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        edges.push([i, j-1]);
      }
      if (d && (d.charCodeAt(0) !== 'E'.charCodeAt(0) ? d.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        // console.log(i, j, ele, d.charCodeAt(0))
        edges.push([i, j+1]);
      }
      if (l && (l.charCodeAt(0) !== 'E'.charCodeAt(0) ? l.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        edges.push([i-1, j]);
      }
      if (r && (r.charCodeAt(0) !== 'E'.charCodeAt(0) ? r.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        edges.push([i+1, j]);
      }
      for (let k of edges) {
        // console.log(i, j)
        // console.log(u, d, l, r, edges);
        cy.add({group: 'edges', data:{source: `${i},${j}`, target: `${k[0]},${k[1]}`}})
      }
    }
  }

  // let path = [];
  // let visited = new Set();
  // function dfs(pos, s=0) {

  //   // if (visited.has(pos.join(','))) return -1;

  //   if (pos[0] === end[0] && pos[1] === end[1]) {
  //     return s;
  //   }

  //   visited.add(pos.join(','));

  //   let edges = nodes[pos[0]][pos[1]];
  //   // queue.push(...edges);
  //   let out = [];
  //   for (let i of edges) {
  //     if (!visited.has(i.join(','))) {
  //       out.push(dfs(i, s+1));
  //     }
  //   }
  //   return out.filter(r => r != -1)[0]
  //   return -1;
  // }
  // c = dfs(start);

  // console.log(nodes);
  let search = cy.elements().aStar({
    root: `[id='${start.join(',')}']`,
    goal: `[id='${end.join(',')}']`,
    directed: true
  });
  // console.log(search.path.map(r => r._private.data.id));

  return (search.distance);

  return c;
}; 

// Second part
exports.goldStar = function(inpArr, inpStr) {
  return undefined;
  let inp = inpArr;
  // let inp = inpArr.map(r => parseInt(r)); // [1,2,3]
  // let inp = inpArr.join('\n').split('\n\n')
  // let inp = inpArr.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r))); // [[1,2,3],[4,5,6],...]
  let c = 0;

  // let m = new Map();
  // let s = new Set();
  // let o = {};
  let map = [];
  let nodes = [];
  let start, end;
  
  map = inp.map(r => r.split(''));
  nodes = inp.map(r => r.split('').map(r => []));

  let cy = cytoscape();

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      // console.log(i, j)
      cy.add({group: 'nodes', data: {id: `${i},${j}`}})
    }
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      let pos = map[i][j];
      let u = map[i]?.[j-1], d = map[i]?.[j+1], l = map[i-1]?.[j], r = map[i+1]?.[j];
      let ele = pos.charCodeAt(0);
      if (pos === 'S') {
        ele = 'a'.charCodeAt(0);
        start = [i, j];
      } else if (pos === 'E') {
        ele = 'z'.charCodeAt(0);
        end = [i, j];
      }

      let edges = [];
      if (u && (u.charCodeAt(0) !== 'E'.charCodeAt(0) ? u.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        edges.push([i, j-1]);
      }
      if (d && (d.charCodeAt(0) !== 'E'.charCodeAt(0) ? d.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        // console.log(i, j, ele, d.charCodeAt(0))
        edges.push([i, j+1]);
      }
      if (l && (l.charCodeAt(0) !== 'E'.charCodeAt(0) ? l.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        edges.push([i-1, j]);
      }
      if (r && (r.charCodeAt(0) !== 'E'.charCodeAt(0) ? r.charCodeAt(0) : 'z'.charCodeAt(0)) <= ele + 1) {
        edges.push([i+1, j]);
      }
      for (let k of edges) {
        // console.log(i, j)
        // console.log(u, d, l, r, edges);
        cy.add({group: 'edges', data:{source: `${i},${j}`, target: `${k[0]},${k[1]}`}})
      }
    }
  }
  
  let s = Infinity;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if(map[i][j] === 'a' || map[i][j] === 'S') {
        let u = map[i]?.[j-1], d = map[i]?.[j+1], l = map[i-1]?.[j], r = map[i+1]?.[j];
        if (u !== 'b' && d !== 'b' && l !== 'b' && r !== 'b') continue;
        let dist = cy.elements().aStar({
          root: `[id='${i},${j}']`,
          goal: `[id='${end.join(',')}']`,
          directed: true
        });
        if (dist.found) console.log(i, j, dist.distance);
        // continue;
        if (dist.found && dist.distance < s) {
          s = dist.distance
        };
      }
    }
  }
  // console.log(search.path.map(r => r._private.data.id));

  return (s);

  return c;
}; 