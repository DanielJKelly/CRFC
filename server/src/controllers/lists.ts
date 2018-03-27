import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/lists';

function readByUser(req: Request, res: Response, next: NextFunction) {
    const userid = { userid: req.params.userid }
    res.promise = procedures.readByUser(userid)
        .then((lists) => {
            return lists;
        });
    
    next();
}

function create(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.create(req.body)
        .then((id) => {
            return id;
        });
    
    next();
}

export default {
    readByUser,
    create
}