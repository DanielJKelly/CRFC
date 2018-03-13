import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/recommendations';
import recommendations from '../procedures/recommendations';

function create(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.create(req.body)
        .then((id) => {
            return id;
        });

    next();
}

function readByRecipient(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.readByRecipient(req.params.recipientid)
        .then((recs) => {
            return recs;
        });
    
    next();
}

export default {
    create,
    readByRecipient
};