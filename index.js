//Importaciones
const { ApolloServer } = require('apollo-server');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')
const typeDefs = require('./db/squema')
const resolvers = require('./db/resolvers')
const connectDB = require('./config/db');
require('dotenv').config({ path: '.env'});

connectDB()


//Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });

//arrancamos el servidor
server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`);
})