import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/ratings';

function create(req: Request, res: Response, next: NextFunction) {
  const model = Object.assign({}, req.body, { movieid: req.params.movieid });
  res.promise = procedures.create(model)
    .then((id) => {
      console.log('--id--', id);
      return id;
    });
  
    next();
}

export default {
  create
}