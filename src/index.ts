import * as dotenv from 'dotenv';
import express from 'express';
import connectDb from './configdt/database';
import routes from './routes';
import configExpress from './configdt/express';

// const bp = require('body-parser');



dotenv.config();
const app = express();
app.use(express.json())

// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

connectDb();
routes(app);
configExpress(app);



app.listen(port, () => {
    console.log('server is running on port 8080');
});