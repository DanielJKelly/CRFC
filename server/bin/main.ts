import * as express from 'express';
import configure from '../src';

const app = express();

configure(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application is listening on port ${port}.`);
});