const mongoose = require('mongoose');
const env = require('./environments/environment');

// Sobreescribo el método "Promise" de MongoDB por el global porque es más completo.
mongoose.Promise = global.Promise;

const mongodbUri = `mongodb://${env.mongodb.domain}:${env.mongodb.port}/${env.mongodb.dbName}`;

function connect() {
    return mongoose.connect(mongodbUri, error => {
        if (error) { return console.error('MongoDB: Error al conectar!') }

        return console.log('MongoDB: conectado...');
    })
}

module.exports = {
    connect
}
