import { Request, Response, NextFunction } from 'express';
import { isUndefined } from 'lodash';
import { ERROR_CODES } from '../errors';

export default function complete(req: Request, res: Response): void {
    let body = res.body;

    if (isUndefined(body)) {
        body = {};
    }

    let code = 200;
   
    res.status(code).json({
        code: code,
        data: body
    });
}
