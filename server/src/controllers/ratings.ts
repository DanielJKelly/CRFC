import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/ratings';

function create(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.create(req.body)
        .then(() => {
            return true;
        });
    next();
}

function destroy(req: Request, res: Response, next: NextFunction) {
  res.promise = procedures.destroy(req.body)
        .then(() => {
            return true;
        });
    next();

}

function update(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.update(req.body)
        .then(() => {
            return true;
        });
    next();
}

function readByUser(req: Request, res: Response, next: NextFunction) {
    const data = Object.assign({}, req.params);
    
    res.promise = procedures.readByUser(data)
        .then((ratings) => {
            return ratings;
        });
    
    next();
}

export default {
  create,
  destroy,
  update,
  readByUser
}