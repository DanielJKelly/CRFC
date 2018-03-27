import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/ratings';

function create(req: Request, res: Response, next: NextFunction) {
  const model = Object.assign({}, req.body, { movieid: req.params.movieid });
  res.promise = procedures.create(model)
      .then((id) => {
          return id;
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

export default {
  create,
  destroy
}