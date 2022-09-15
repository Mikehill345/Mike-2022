const Client = require('../models/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.newKey = (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt
      .hash(req.body.password, salt)
      .then((hash) => {
        const client = new Client({
          publicKey: req.body.publicKey,
          privateKey: req.body.privateKey,
          message: req.body.message,
          sign: req.body.sign,
          password: hash,
        })
        client.save().then(() => {
          res.status(201).json({
            message: 'Wow, it saved',
            client,
          })
        })
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        })
      })
  })
}

exports.publicKeySearch = (req, res) => {
  let search = { sign: req.body.sign }

  Client.findOne(search).then((sign) => {
    if (!sign) {
      return res.status(401).json({
        error: new Error('Denied!'),
      })
    }
    // const token = jwt.sign(process.env.JWTSECRET, {
    //   expiresIn: '24h',
    // })
    res.status(200).json({
      message: 'Verified'
    })
  })
}