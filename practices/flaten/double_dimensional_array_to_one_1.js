function double_to_one(collection) {
  var oneDimensionalArray = buildOneDimensionalArray(collection);
  return oneDimensionalArray;
}

function buildOneDimensionalArray(collection) {
  var oneDimensionalArray = [];
  collection.forEach(function (element) {
    if (element.length === undefined) {
      oneDimensionalArray.push(element);
    }
    for (var i = 0; i < element.length; i++) {
      oneDimensionalArray.push(element[i]);
    }
  });
  return oneDimensionalArray;
}


module.exports = double_to_one;
