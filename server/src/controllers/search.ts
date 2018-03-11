import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/search';

function search(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.search(req.params.term)
        .then((results) => {
            return results;
        });
    
    next();
}

export default {
    search
};