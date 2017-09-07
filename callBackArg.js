// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(currVal,index,array){
    if (currVal === "Waldo") {
      found(index);
      // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found waldo at "+index+'!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);