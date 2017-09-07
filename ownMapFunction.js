var words = ["ground", "control", "to", "major", "tom"];

var lengths = map(words, function(word) {
  return word.length;
});

var upper = map(words, function(word) {
  return word.toUpperCase();
});
  console.log(upper);

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, cb){
  var newArr = [];
  arr.forEach(function(element){
    newArr.push(cb(element));
  });
  return newArr;
};

// implement your own version of the built in array map function. will take two arguments. first will be an array to map and the second will be a callback function
