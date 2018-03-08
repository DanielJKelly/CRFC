import BaseService from './base.svc';

export default class MovieService extends BaseService {
    constructor() {
        super('movie');
    }

    read(id: number): Promise<any> {
        return this.get(`${id}`);
    }
}