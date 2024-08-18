const express = require ('express')
const dbConnection = require('../database/config')
const { getExportation, postExportation} = require('../controllers/export.controller')


class Server{
    constructor(){
    this.app = express()
    this.listen()
    this.dbConnection()
    this.pathExportation = "/api/export"
    this.route()
    
    }

    route (){
        this.app.use(express.json())
        this.app.get(this.pathExportation, getExportation)
        this.app.post(this.pathExportation, postExportation)

        
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`)
        })
    }

    async dbConnection(){ // call connet to database
        await dbConnection()
    }
}


module.exports = Server