import { join } from 'path';
import { isEmpty } from 'lodash';
import { isPresent } from './utils.mw';
import { Request, Response, NextFunction } from 'express';

function isServerAsset(path: string) {
    const pieces = path.split('/');

    if (isEmpty(pieces.length)) {
        return false;
    }

    const last = pieces[pieces.length - 1];

    if (isPresent('/api', path) || isPresent('/?', path)) {
        return true;
    } else if (isPresent('.', last)) {
        return true;
    } else {
        return false;
    }
}

function stateRouting(req: Request, res: Response, next: NextFunction) {
    if (isServerAsset(req.url)) {
        next();
    } else {
        res.sendFile(
            join(__dirname, '..', '..', '..', 'client', 'dist', 'index.html')
        );
    }
}

export default stateRouting;