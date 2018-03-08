import BaseService from './base.svc';

export class MovieService extends BaseService {
    constructor() {
        super('movie');
    }

    read(id: number): Promise<any> {
        return this.get(`${id}`);
    }
}