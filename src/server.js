const app = require('express')()
const server = require('http').createServer(app)
const io  = require('socket.io')(server)
const cors = require('cors')

const routes = require('./routes/index')
const PORT = process.env.PORT || 3131

app.use(routes)
app.use(cors())

require('./sockets/index')(io)


server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})