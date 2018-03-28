import { Request, Response, NextFunction } from 'express';
import * as lodash from 'lodash';

export enum ERROR_CODES {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
};

class HttpError extends Error implements errors.IHttpError {
    constructor(public message: string, public fromDb: boolean = false, public status: number) {
        super(message);
    }
}

export class BadRequestError extends HttpError {
    name: 'BadRequestError';

    constructor(public fromDb: boolean = false, public message: string = 'Bad Request') {
        super(message, fromDb, ERROR_CODES.BAD_REQUEST);
    }
}

export class ForbiddenError extends HttpError {
    name: 'ForbiddenError';

    constructor(public fromDb: boolean = false, public message: string = 'Forbidden') {
        super(message, fromDb, ERROR_CODES.FORBIDDEN);
    }
}

export class NotAuthorizedError extends HttpError {
    name: 'NotAuthorizedError';

    constructor(public fromDb: boolean = false, public message: string = 'Not Authorized') {
        super(message, fromDb, ERROR_CODES.UNAUTHORIZED);
    }
}

export class NotFoundError extends HttpError {
    name: 'NotFoundError';

    constructor(public fromDb: boolean = false, public message: string = 'Not Found') {
        super(message, fromDb, ERROR_CODES.NOT_FOUND);
    }
}

export class ServerError extends HttpError {
    name: 'ServerError';

    constructor(public fromDb: boolean = false, public message: string = 'Internal Server Error') {
        super(message, fromDb, ERROR_CODES.INTERNAL_SERVER_ERROR);
    }
}

export class AuthenticationError extends HttpError {
    name: 'AuthenticationError';

    constructor(public fromDb: boolean = false, public message: string = 'Authentication Failed') {
        super(message, fromDb, ERROR_CODES.UNAUTHORIZED);
    }
}

export const promiseErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    if (!err.fromDb) {
        next(err);
        return;
    }

    let code = err.status;
    let type = ERROR_CODES[code];

    if (!err.status) {
        code = ERROR_CODES.INTERNAL_SERVER_ERROR;
        type = ERROR_CODES[500];
    }

    res.status(code).json({
        code,
        data: {
            message: err.message || type
        }
    });
};

export const globalErrorHandler = (err: any, req: Request, res: Response, next: Function) => {
    if (!lodash.isArray(err) && lodash.isString(err.message) && (err.message !== 'Not Authorized' && err.message !== 'Forbidden')) {
        console.error('The express error handler has has been called with the following error:');
        console.error(err);
    }

    res.render('error', {
        error: err
    });
};
