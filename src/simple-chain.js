const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  value: [],
  addLink: function (newValue) {
    this.value.push(`( ${newValue} )`);
    return this;
  },
  getLength: function () {
    return this.value.length;
  },
  removeLink: function (position) {
    if(this.value[position -1]  === undefined) {
      this.value = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.value = this.value.filter((_, ind) => ind !== position - 1);
    return this;
  },
  reverseChain: function () {
    this.value = this.value.reverse();
    return this;
  },
  finishChain: function () {
    const outputStr = this.value.join("~~");
    this.value = []
    return outputStr;
  },
}



  module.exports = {
    chainMaker,
  }

