import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/users';

function all(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.all()
        .then((users) => {
            return users;
        });
    
    next();
}

export default {
    all
};