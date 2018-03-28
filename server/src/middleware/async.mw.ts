import { Request, Response, NextFunction, RequestHandler } from 'express';
import {map, flattenDeep} from 'lodash';

const asyncHandler = (handler: RequestHandler): (req: Request, res: Response, next: NextFunction) => void => { 
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve((handler(req, res, next)))
            .catch(next);
    };
};

export default (...handlers: Array<any>) => {
        return map(flattenDeep(handlers), (handler) => asyncHandler(handler));
    };
