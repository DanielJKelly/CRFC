import * as express from 'express';
import { join } from 'path';
import stateRouting from './middleware/routing.mw';

const clientDist = join(__dirname, '..', '..', 'client', 'dist');

const configure = (app: express.Application): void => {
    app
        .use(express.static(clientDist))
        .use(express.json())
        .use(express.urlencoded({ extended: false }))
        .use(stateRouting);
};

export default configure;