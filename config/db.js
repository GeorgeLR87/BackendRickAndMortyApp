const mongoose = require('mongoose');
require('dotenv').config({ path: '.env'});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Conectada');

    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1); // detener la app
    }
}

module.exports = connectDB;