import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import expressPlayGround from 'graphql-playground-middleware-express'
import schema from './schema'

const app = express();
app.use('*', cors());
app.use(compression());

const apolloServer = new ApolloServer({
    schema,
    introspection: true
});
apolloServer.applyMiddleware({ app });

app.use('/', expressPlayGround({
    endpoint: "/graphql"
}));

const port = 5001;
const httpServer = createServer(app);
httpServer.listen({ port }, () => {
    console.log(`Acamedia Online Started! ${port}`);
});