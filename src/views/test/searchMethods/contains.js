/**
 * Return an array of results whose fieldName contains the specified searchString (appliable to all datatypes)
 * @param {Array} array Array to filter
 * @param {String} fieldName Name of the field to filter by
 * @param {String} searchString String to search inside each result
 * @param {Function} standardize Standardization function for each datatype
 * @returns {Array}
 */
const contains = (array, fieldName, searchString, standardize) => {
  return filterArray(array, fieldName, standardize, (value) => {
    let regex = new RegExp(`.*${searchString}.*`);
    return regex.test(value);
  });
}

/**
 * Return an array of results whose fieldName contains the specified searchString (appliable to all datatypes)
 * @param {Array} array Array to filter
 * @param {String} fieldName Name of the field to filter by
 * @param {String} searchString String to search inside each result
 * @param {Function} standardize Standardization function for each datatype
 * @returns {Array}
 */
const notContains = (array, fieldName, searchString, standardize) => {
  return filterArray(array, fieldName, standardize, (value) => {
    let regex = new RegExp(`.*${searchString}.*`);
    return regex.test(value);
  });
}