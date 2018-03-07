enum ERROR_CODES {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
};

class HttpError extends Error implements errors.IHttpError {
    constructor(public message: string, public status: number) {
        super(message);
    }
}

export class BadRequestError extends HttpError {
    name: 'BadRequestError';

    constructor(public message: string = 'Bad Request') {
        super(message, ERROR_CODES.BAD_REQUEST);
    }
}

export class ForbiddenError extends HttpError {
    name: 'ForbiddenError';

    constructor(public message: string = 'Forbidden') {
        super(message, ERROR_CODES.FORBIDDEN);
    }
}

export class NotAuthorizedError extends HttpError {
    name: 'NotAuthorizedError';

    constructor(public message: string = 'Not Authorized') {
        super(message, ERROR_CODES.UNAUTHORIZED);
    }
}

export class NotFoundError extends HttpError {
    name: 'NotFoundError';

    constructor(public message: string = 'Not Found') {
        super(message, ERROR_CODES.NOT_FOUND);
    }
}

export class ServerError extends HttpError {
    name: 'ServerError';

    constructor(public message: string = 'Internal Server Error') {
        super(message, ERROR_CODES.INTERNAL_SERVER_ERROR);
    }
}

export class AuthenticationError extends HttpError {
    name: 'AuthenticationError';

    constructor(public message: string = 'Authentication Failed') {
        super(message, ERROR_CODES.UNAUTHORIZED);
    }
}

export default ERROR_CODES;