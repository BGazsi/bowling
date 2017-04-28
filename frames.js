const utils = require('../lib/utils');

const MAX_FRAME_COUNT = 10;
const MAX_PIN = 10;

module.exports = {
    //nem pontszamot ad vissza, hanem a ledontott babuk szamat
    generateFrame: function() {
        let firstRoll = utils.getRandomIntInclusive(0, MAX_PIN);
        if(firstRoll === MAX_PIN) {
            return [firstRoll];
        }
        return [firstRoll, utils.getRandomIntInclusive(0, MAX_PIN - firstRoll)];
    },

    isStrike: function(arr) {
        return arr.length === 1;
    },

    isSpare: function(arr) {
        return arr.length > 1 && ((arr[0] + arr[1]) % MAX_PIN === 0);
    },

    countFrameScores: function(frames) {
        let res = [frames[0]];
        frames.reduce((prev, curr) => {
            let tmp = curr;
            if(this.isStrike(prev)) {
                tmp = curr.map(val => {
                    return val * 2;
                });
            } else if(this.isSpare(prev)) {
                tmp = curr.length > 1 ? [curr[0] * 2, curr[1]] : [curr[0] * 2];
            }
            res.push(tmp);
            return curr;
        });
        return res;
    },

    countAccumulatedScore: function(frameScores) {
        return [].concat.apply([], frameScores).reduce((prev, next) => prev + next);
        // return frameScores.reduce((acc, frame) => {
        //     return frame.reduce((prev, next) => prev + next, acc);
        // }, 0);
    },

    play: function () {
        let frames = new Array(MAX_FRAME_COUNT).fill([]);
        frames = frames.map(value => this.generateFrame());
        frames = this.countFrameScores(frames);
        return this.countAccumulatedScore(frames);
    }
};
