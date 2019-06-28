const Usuario = require('../../models/Usuario');
const Crypting = require('../../utils/crytping');

const controllers = {
  async signup(req, res) {
    try {
      console.log(Crypting.encrypt(req.body.password1));
      res.json({
        message: 'todo bien'
      });
    } catch (error) {
      res.json({ error });
    }
  }
};

module.exports = controllers;
