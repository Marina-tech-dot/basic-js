const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  typeIsReverse = false

  constructor(typeMachine) {
    if (typeMachine === false) {
      this.typeIsReverse = true;
    }
    this.creptMachine = this.creptMachine.bind(this);
  }

  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.creptMachine("encrypt", text, key);
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.creptMachine("decrypt", text, key);
  }

  creptMachine (mode, text, key) {
      const keyFlow = key
        .split("")
        .map((el) => el.toLowerCase().charCodeAt(0) - 97);
      let validKeyIndex = -1;

      const encryptArr = text.split("").map((el) => {
        if (el.toLowerCase() != el.toUpperCase()) {
          el = el.toLowerCase().charCodeAt(0) - 97;

          validKeyIndex < keyFlow.length - 1
            ? (validKeyIndex += 1)
            : (validKeyIndex = 0);

        if (mode === "encrypt") {
          el = (el + keyFlow[validKeyIndex]) % 26;
        } 

        if (mode === 'decrypt') {
          el =
          (el - keyFlow[validKeyIndex] <= 25 && el - keyFlow[validKeyIndex] >= 0)
            ? el - keyFlow[validKeyIndex]
            : (el - keyFlow[validKeyIndex]) + 26;
        }

          el = String.fromCodePoint(el + 97).toUpperCase();
        }
        return el;
      });

      if (this.typeIsReverse === true) {
        return encryptArr.reverse().join("");
      }

      return encryptArr.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};




