import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/search';

function search(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.search(req.params.term)
        .then((results) => {
            console.log('results', results);
            return results;
        }, (err: Error) => {
            console.error(err);
        });
    
    next();
}

export default {
    search
};