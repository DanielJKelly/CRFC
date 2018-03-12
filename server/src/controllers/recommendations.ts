import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/recommendations';

function create(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.create(req.body)
        .then((id) => {
            return id;
        });

    next();
}

export default {
    create
};