import * as dotenv from 'dotenv';
import express from 'express';
import connectDb from './configdt/database';
import routes from './routes';
import configExpress from './configdt/express';

dotenv.config();
const app = express();

connectDb();
routes(app);
configExpress(app);

app.get('/', (req, res) => {
    res.send('hola mundo');
});

app.listen(8080, () => {
    console.log('server is running on port 8080');
});