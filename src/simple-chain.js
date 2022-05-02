const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push((value !== undefined) ? `( ${String(value)} )` : '( )')
    return this;
  },
  removeLink(position) {
    if (!this.chainArr[position - 1]) {
      this.chainArr = [];
      throw new Error ("You can\'t remove incorrect link!");
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let res = this.chainArr.join('~~');
    this.chainArr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
