const assert = require('assert');
const make = require('../make.js');

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

describe('Test: make()', () => {
  it('1', () => {
    const elem = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(elem, 777);
  });

  it('2', () => {
    const elem = make(1)(2)(3)(4)(5)(multiply);
    assert.deepEqual(elem, 120);
  });

  it('3', () => {
    const elem = make(1)()(2)()(3)(sum);
    assert.deepEqual(elem, 6);
  });

  it('4', () => {
    const elem = make(1)()()(4)(sum);
    assert.deepEqual(elem, 5);
  });
})
