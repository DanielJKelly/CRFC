import { Request, Response, NextFunction } from 'express';
import { forEach, isUndefined, toNumber } from 'lodash';
import { isEmail, idPropsToNums } from '../utils';
import { BadRequestError } from '../errors';

export default function processParams(): (req: Request, res: Response, next: NextFunction) => void {
    return ({params, query}: Request, res: Response, next: NextFunction) => {
        if (!!params.id) {
            params.id = toNumber(params.id);
        }

        if (!!query.startingrow) {
            query.startingrow = toNumber(query.startingrow);
        }

        if (!!query.rowcount) {
            query.rowcount = toNumber(query.rowcount);
        }

        forEach(query, (value: any, key: string) => {
            if (value === 'null' || value === 'undefined') {
                delete query[key];
                return;
            }

            if (value === 'false' || value === 'true') {
                value = value === 'true';
            } else if (!isNaN(toNumber(value))) {
                value = toNumber(value);
            }

            query[key] = value;
        });

        next();
    };
};
