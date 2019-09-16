function charCount(string) {
  return string.length;
}

function specificCharCount(string, char){
  var count = 0;
  for(var i=0; i <=string.length; i++){
    if(string[i] === char){
      count++;
    }
  }
  return count;
}

function specificSubstringCount(string, substring) {
  var count = 0;
  var stringLength = string.length;
  var subLength = substring.length;
  var lastIndex = stringLength - subLength;
  for(var i=0; i <=lastIndex; i++){
    var derivedSub = string.substring(i, i+subLength);
    if(derivedSub === substring){
      count++;
    }
  }
  return count;
}
