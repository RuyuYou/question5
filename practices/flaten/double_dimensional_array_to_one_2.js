function double_to_one(collection) {
  var oneDimensionalArray = buildOneDimensionalArray(collection);
  var reNewArray = buildReNewArray(oneDimensionalArray);
  return reNewArray;
}

function buildOneDimensionalArray(collection) {
  var oneDimensionalArray = [];
  collection.forEach(function (element) {
    for (var i = 0; i < element.length; i++) {
      oneDimensionalArray.push(element[i]);
    }
  });
  return oneDimensionalArray;
}

function findReNewArray(element, reNewArray) {
  for (var i = 0; i < reNewArray.length; i++) {
    if (element === reNewArray[i]) {
      return false;
    }
  }
  return true;
}

function buildReNewArray(oneDimensionArray) {
  var reNewArray = [];
  for (var i = 0; i < oneDimensionArray.length; i++) {
    if (findReNewArray(oneDimensionArray[i], reNewArray)) {
      reNewArray.push(oneDimensionArray[i]);
    }
  }
  return reNewArray;
}

module.exports = double_to_one;
