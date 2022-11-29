/**
 * @function inRange
 * Returns an array of results whose fieldName is inside the specified range (appliable to numbers and dates)
 * @param {Array} array Array that contains the information to filter
 * @param {String} fieldName Name of the field to filter by
 * @param {Array} range Range of values to filter by
 * @param {Function} standardize Standardization function for the specified field
 * @returns {Array}
 */
const inRange = (array, fieldName, range = [min, max], standardize) => {
  // You can also pass an instance of a certain type (in this case, a CustomDate) to standardize itself
  let [minValue, maxValue] = [standardize(min), standardize(max)];
  return filterArray(array, fieldName, standardize, (value) => {
    return value >= minValue && value <= maxValue;
  });
}

/**
 * @function notInRange
 * Returns an array of results whose fieldName is outside the specified range (appliable to numbers and dates)
 * @param {Array} array Array that contains the information to filter
 * @param {String} fieldName Name of the field to filter by
 * @param {Array} range Range of values to filter by
 * @param {Function} standardize Standardization function for the specified field
 * @returns {Array}
 */
const notInRange = (array, fieldName, range = [min, max], standardize) => {
  let [minValue, maxValue] = [standardize(min), standardize(max)];
  return filterArray(array, fieldName, standardize, (value) => {
    return value <= minValue && value >= maxValue;
  })
}