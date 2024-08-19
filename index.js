const Server = require('./model/server')
require('dotenv').config()

const server = new Server() //create server instance

server.listen()