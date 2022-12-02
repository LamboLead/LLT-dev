const path = require('path');
const pathSolver = (stringPath) => {
  stringPath[0] === '/' ? stringPath = stringPath.substring(1) : stringPath = stringPath;
  // if (stringPath[0] === '/')
  return require(path.join(process.cwd(), `/LLT/backend/${stringPath}`));
}
module.exports = pathSolver;