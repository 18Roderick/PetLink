const bycript = require('bcrypt');

const SALT = 10;

const Crypting = {
  encrypt(text) {
    const salt = bycript.genSaltSync(SALT);
    return bycript.hashSync(text, salt);
  },
  compare(text, text2) {
    return bycript.compareSync(text, text2);
  }
};

module.exports = Crypting;
