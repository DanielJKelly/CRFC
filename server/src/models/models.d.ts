declare module Express {
    interface Response {
        error?: any;
        body?: any;
        promise?: Promise<any>;
    }
}