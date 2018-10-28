const assert = require('assert');
const sumOfOther = require('../sumOfOther.js');

describe('Test: sumOfOther()', () => {
  it('1', () => {
    const elem = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(elem, [8, 7, 6, 9]);
  });

  it('2', () => {
    const elem = sumOfOther([1, 2, 3, 4]);
    assert.deepEqual(elem, [9, 8, 7, 6]);
  });

  it('3', () => {
    const elem = sumOfOther([10, 20, 21, 22, 19]);
    assert.deepEqual(elem, [82, 72, 71, 70, 73]);
  });

  it('4', () => {
    const elem = sumOfOther([15, 25, 35, 45, 55]);
    assert.deepEqual(elem, [160, 150, 140, 130, 120]);
  });
});
