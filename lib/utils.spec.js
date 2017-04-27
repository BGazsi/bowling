/* global describe, it */

var expect = require('chai').expect
var utils = require('./utils')

const MIN = 1
const MAX = 10

describe('utils', () => {
  describe('.getRandomIntInclusive(min, max)', () => {
    const randomInt = utils.getRandomIntInclusive(MIN, MAX)

    it('Value should be an Integer.', () => {
      return expect(Number.isInteger(randomInt)).to.be.true
    })

    it('Value should be greater than or equal to MIN.', () => {
      expect(randomInt).to.be.at.least(MIN)
    })

    it('Value should be less than or equal to MAX.', () => {
      expect(randomInt).to.be.at.most(MAX)
    })
  })
})
