module.exports = function reverse (n) {
  let str = n.toString();
  let result = '';
  if (n > 0) {
    result = str.split('').reverse().join('');
  } else {
    result = str.slice(1).split('').reverse().join('');
  }
  return +result;
}

