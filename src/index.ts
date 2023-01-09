import * as dotenv from 'dotenv';
import express from 'express';
import connectDb from './configdt/database';
import routes from './routes';
import configExpress from './configdt/express';
import  log  from './logger';


dotenv.config();
const app = express();
// app.use(express.json())

const port = process.env.PORT || 8080;

configExpress(app);

connectDb();

routes(app);




app.listen(port, () => {
    log.info('server is running on port 8080');
});