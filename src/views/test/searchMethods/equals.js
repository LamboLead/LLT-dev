const equals = (array, fieldName, searchString, standardize) => {
  return filterArray(array, fieldName, standardize, (value) => {
    return value === searchString;
  });
}