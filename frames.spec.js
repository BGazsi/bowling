/* global describe, it */

const expect = require('chai').expect;
const frame = require('./frames');
const mock = [
    [2, 8], // 10
    [3, 3], // 19
    [1, 0], // 20
    [10],   // 30
    [4, 6], // 50
    [4, 3], // 61
    [1, 8], // 70
    [7, 3], // 80
    [10],   // 100
    [3, 6]  // 118
];

describe('frame', () => {
    describe('.play()',  () => {
        it('should return an Integer', () => {
            return expect(Number.isInteger(frame.play())).to.be.true
        });
        it('should return a positive number', () => {
            return expect(frame.play() > 0).to.be.true
        });
    });
    describe('.play(mock)',  () => {
        it('should return 118', () => {
            expect(frame.play(mock)).to.equal(118)
        });
    });
    describe('.isSpare([2, 8])',  () => {
        it('should return true', () => {
            return expect(frame.isSpare([2, 8])).to.be.true
        });
    });
    describe('.isSpare([1, 8])',  () => {
        it('should return true', () => {
            return expect(frame.isSpare([1, 8])).to.be.false
        });
    });
    describe('.isStrike([1, 8])',  () => {
        it('should return false', () => {
            return expect(frame.isStrike([1, 8])).to.be.false
        });
    });
    describe('.isStrike([10])',  () => {
        it('should return true', () => {
            return expect(frame.isStrike([10])).to.be.true
        });
    });
    describe('.isStrike([20])',  () => {
        it('should return true', () => {
            return expect(frame.isStrike([20])).to.be.true
        });
    });
    describe('.isStrike([2, 8])',  () => {
        it('should return false', () => {
            return expect(frame.isStrike([2, 8])).to.be.false
        });
    });
    describe('.generateFrame()',  () => {
        it('should return an Array', () => {
            return expect(frame.generateFrame() instanceof Array).to.be.true
        });
        it('should return an Array with less than 3 items', () => {
            return expect(frame.generateFrame().length < 3).to.be.true
        });
    });
});
