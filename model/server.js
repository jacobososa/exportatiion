const express = require('express');
const dbConnection = require('../database/config'); // Importa la función de conexión a la base de datos
const { getExportation, postExportation } = require('../controllers/export.controller');

class Server {
    constructor() {
        this.app = express();
        this.pathExportation = "/api/export";
        
        // Configura los middlewares y rutas
        this.route();

        // Conecta a la base de datos y arranca el servidor
        this.startServer();
    }

    route() {
        this.app.use(express.json());
        this.app.get(this.pathExportation, getExportation);
        this.app.post(this.pathExportation, postExportation);
    }

    async startServer() {
        try {
            await dbConnection(); // Espera la conexión a la base de datos
            this.listen(); // Inicia el servidor solo después de que la base de datos esté conectada
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error);
            process.exit(1); // Salir si no se puede conectar a la base de datos
        }
    }

    listen() {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}

module.exports = Server;
