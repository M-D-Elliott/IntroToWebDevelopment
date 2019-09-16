function divideStringArrayEvensOdds(array) {
  var evens = [];
  var odds = [];
  for(var i=0;i < array.length;i++){
    if(i % 2 === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  return [evens, odds];
}

function divideStringArrayEvensOddsBackwards(array) {
  var evens = [];
  var odds = [];
  for(var i=0;i < array.length;i++){
    if(i % 2 === 0) {
      evens.unshift(array[i]);
    } else {
      odds.unshift(array[i]);
    }
  }
  return [evens, odds];
}

function findMax(array) {
  var max = array[0];
  for(var i=1;i<array.length;i++){
    if(max < array[i]){
      max = array[i];
    }
  }
  return max;
}

function sumOfRange(array) {
  sum = 0;
  for(var i=0;i<array.length;i++){
    sum += array[i];
  }
  return sum;
}

function compareObjects(obj1, obj2) {
  return obj1 === obj2;
}
