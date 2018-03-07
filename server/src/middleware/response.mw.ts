import { Request, Response, NextFunction } from 'express';
import * as lodash from 'lodash';
import ERRORS from '../errors';

function send(req: Request, res: Response): void {
    let response = format(res.error, res.body);

    res.error = undefined;
    res.body = undefined;
    res.status(response.status).send(response.body);
}

function wait(req: Request, res: Response, proceed: () => void): void {
    if (lodash.isUndefined(res.promise)) {
        res.error = new Error();
        proceed();
        return;
    }

    Promise.resolve(res.promise)
        .then((body) => {
            res.body = body;
        }, (err: any) => {
            res.error = err;
        })
        .then(proceed);
}

export default function complete(req: Request, res: Response): void {
    wait(req, res, () => {
        send(req, res);
    });
}

export function format(err?: any, data?: any): any {
    let code = ERRORS.OK;

    return {
        status: code,
        body: {
            code: code,
            data: data
        }
    };
}
