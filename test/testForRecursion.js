const assert = require('assert');
const recursion = require('../recursion.js');

describe('Test: recursion()', () => {
  it('1', () => {
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
    const elem = recursion(tree);
    assert.deepEqual(elem, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
