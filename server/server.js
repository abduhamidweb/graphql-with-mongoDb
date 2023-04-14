import {
    ApolloServer
} from '@apollo/server';
import {
    startStandaloneServer
} from '@apollo/server/standalone';
import modules from "../modules/index.js"
import dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({
    typeDefs: [modules.u.typeDefs, modules.p.typeDefs, modules.o.typeDefs],
    resolvers: [modules.u.resolvers, modules.p.resolvers, modules.o.resolvers]
});

const {
    url
} = await startStandaloneServer(server, {
    listen: {
        port: process.env.PORT || 3000
    },
});

console.log(`🚀  Server ready at: ${url}`);