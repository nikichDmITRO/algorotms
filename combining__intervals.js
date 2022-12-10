let input1 = [ [1, 3], [2, 6], [8, 10], [15, 18] ];

function merge(interv) {

  if (interv.length < 2) {
    return interv;
  }

  interv.sort((a, b) => a[0] - b[0]);

  let result = [interv[0]];

  for (let int of interv) {
    let recent = result[result.length - 1];
    if (recent[1] >= int[0]) {
      recent[1] = Math.max(recent[1], int[1]);
    } else {
      result.push(int);
    }
  }
  return result;
}
console.log(merge(input1)); //[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
