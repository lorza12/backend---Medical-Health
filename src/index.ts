import * as dotenv from 'dotenv';
import express from 'express';
import connectDb from './configdt/database';
import routes from './routes';
import configExpress from './configdt/express';




dotenv.config();
const app = express();
app.use(express.json())



const port = process.env.PORT || 8080;

connectDb();
routes(app);
configExpress(app);



app.listen(port, () => {
    console.log('server is running on port 8080');
});