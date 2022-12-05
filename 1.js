// Day 1

// First part
exports.silverStar = function(inp, inpStr) {
  inp = inp.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r)));
  console.log(inp);
  let c = 0;

  for (let i = 0; i < inp.length; i++) {
    let val = inp[i];
    let s = val.reduce((a, c) => a+c, 0);
    console.log(s)
    if (s > c) c = s;
  }

  return c;
}; 

// Second part
exports.goldStar = function(inp, inpStr) {
  inp = inp.join('\n').split('\n\n').map(r=>r.split('\n').map(r=>parseInt(r)));
  // console.log(inp);
  let c = 0;

  let res = [];

  for (let i = 0; i < inp.length; i++) {
    let val = inp[i];
    let s = val.reduce((a, c) => a+c, 0);
    console.log(s)
    res.push(s);
  }

  res = res.sort((a, b) => b-a);
  console.log(res);
  return res[0] + res[1] + res[2];

  return c;
}; 