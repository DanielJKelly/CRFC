class HttpError extends Error implements errors.IHttpError {
    constructor(public message: string, public status: number) {
        super(message);
    }
}

export class BadRequestError extends HttpError {
    name: 'BadRequestError';

    constructor(public message: string = 'Bad Request') {
        super(message, 400);
    }
}

export class ForbiddenError extends HttpError {
    name: 'ForbiddenError';

    constructor(public message: string = 'Forbidden') {
        super(message, 403);
    }
}

export class NotAuthorizedError extends HttpError {
    name: 'NotAuthorizedError';

    constructor(public message: string = 'Not Authorized') {
        super(message, 401);
    }
}

export class NotFoundError extends HttpError {
    name: 'NotFoundError';

    constructor(public message: string = 'Not Found') {
        super(message, 404);
    }
}

export class ServerError extends HttpError {
    name: 'ServerError';

    constructor(public message: string = 'Internal Server Error') {
        super(message, 500);
    }
}

export class AuthenticationError extends HttpError {
    name: 'AuthenticationError';

    constructor(public message: string = 'Authentication Failed') {
        super(message, 401);
    }
}