import * as express from 'express';
import initializeDb from '../src/config/db';
import configure from '../src';

const app = express();

configure(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    initializeDb();
    console.log(`Application is listening on port ${port}.`);
});