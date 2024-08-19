const mongoose = require('mongoose');

// Función de conexión a la base de datos
const dbConnection = async () => {
    try {
        // Conectar a MongoDB usando la URI desde las variables de entorno
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Connect to server database');
    } catch (error) {
        // Mostrar el error en caso de que la conexión falle
        console.log('Error connecting to the database:', error);
    }
}

module.exports = dbConnection; // Exportar la función dbConnection
