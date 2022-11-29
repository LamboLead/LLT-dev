const greaterThan = (array, fieldName, comparator, standardize) => {
  return filterArray(array, fieldName, standardize, (value) => {
    return value > comparator;
  });
}
