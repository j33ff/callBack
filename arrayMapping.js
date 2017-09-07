var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];



var result = input.map(function (currVal, index, array) {
  var x = currVal.x;
  var y = currVal.y;
  var z = (Math.pow(x,2) + Math.pow(y,2));
  var ans = Math.sqrt(z);
  return ans;
  // return currVal.x ** 2 + currVal.y ** 2;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

