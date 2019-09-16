function findMax(array) {
  var max = array[0];
  for(var i=1;i<array.length;i++){
    if(max < array[i]){
      max = array[i];
    }
  }
  return max;
}
