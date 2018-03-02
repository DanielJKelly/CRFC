declare namespace errors {
    interface IHttpError extends Error {
        status: number;
    }

    interface IHttpErrors extends Array<IHttpError> { }
}