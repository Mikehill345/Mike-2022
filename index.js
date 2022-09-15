const server = require('./server')
const { app, currentTime } = require('./server')
require('colors')

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `\n**  server is listening on port ${PORT} at ${currentTime}`.magenta
  )
})