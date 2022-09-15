const express = require('express')

const connectDB = require('./db')
const dotenv = require('dotenv')

const clientRouter = require('./routes/auth')



connectDB()

const app = express()

app.use(express.json({ extended: false }))

if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}

app.use("/api", clientRouter)


let currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
  })
  
  app.get('/', (req, res) => {
    res.send({
      status: 200,
      currentTime,
      message: "server is running "
    })
  })
  
  module.exports = { app, currentTime }