module.exports = function make(...arr) {
  return function tempFunc(...args) {
	if(typeof args[0] === "function") return arr.reduce(args[0]);
  	arr = arr.concat(args);
    return tempFunc;
  }
}
