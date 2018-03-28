import { Request, Response, NextFunction } from 'express';
import {map, flattenDeep} from 'lodash';

const asyncHandler = (fn: Function) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

const asyncHandlerArr = (...handlers: Array<any>) => {
        return map(flattenDeep(handlers), (handler) => asyncHandler(handler));
    };

export default {
    asyncHandler, 
    asyncHandlerArr
}