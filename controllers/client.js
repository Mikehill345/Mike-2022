const Client = require('../models/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs');

let private_key = fs.readFileSync('./private.key','utf8');
let public_key = fs.readFileSync('./public.key','utf8');

exports.newKey = (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt
      .hash(process.env.PASSWORD, salt)
      .then((hash) => {
        const client = new Client({
          publicKey: public_key,
          privateKey: private_key,
          message: process.env.MESSAGE,
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
  let search = { publicKey: req.body.publicKey }

  Client.findOne(search).then((client) => {
    if (!client) {
      return res.status(401).json({
        error: new Error('not found!'),
      })
    }

    bcrypt.compare(req.body.password, client.password, function (err, isMatch) {
      if (err) {
        throw err 
      } else if (!isMatch) {

        console.log('Password does not match!')
      } else {
        console.log({message: client.message, signature: client.sign})
        res.status(200).json({message: 'Success!'})
      }
    })
  })
}



exports.findSignature = (req, res) => {
  let search = { sign: req.body.sign }

  Client.findOne(search).then((sign) => {
    if(!sign){
      return res.status(401).json({ message: 'better luck next time' })
    } else {
      console.log('verified')
      res.status(200).json({ message: 'verified' })
    }
  })
}