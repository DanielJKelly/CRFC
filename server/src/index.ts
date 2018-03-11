import * as express from 'express';
import { join } from 'path';
import stateRouting from './middleware/routing.mw';
import api from './routers/api';
import * as morgan from 'morgan';

const clientDist = join(__dirname, '..', '..', 'client', 'dist');

const configure = (app: express.Application): void => {
    app
        .use(morgan('dev'))
        .use(express.static(clientDist))
        .use(express.json())
        .use(express.urlencoded({ extended: false }))
        .use('/api/v1', api)
        .use(stateRouting);
};

export default configure;