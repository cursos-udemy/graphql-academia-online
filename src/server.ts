import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();
app.use('*', cors());
app.use(compression());

app.use('/', (req, res)=>{
    res.send('Bienvenido a la Academia Online');
});

const port = 5001;
const httpServer = createServer(app);
httpServer.listen({port}, ()=> {
    console.log(`Acamedia Online Started! ${port}`);
})