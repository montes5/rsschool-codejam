const assert = require('assert');
const recursion = require('../recursion.js');

const tree = {
  value: 100,
  left: {
    value: 90,
    left: {
      value: 70,
    },
    right: {
      value: 99,
    },
  },
  right: {
    value: 120,
    left: {
      value: 110,
    },
    right: {
      value: 130,
    },
  },
};

describe('Test: recursion()', () => {
  it('1', () => {
    const answ = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.deepEqual(answ, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
