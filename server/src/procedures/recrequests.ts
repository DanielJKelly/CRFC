import Model from './model';
import validators from '../validators/recrequests';
import { pluralize } from '../utils'; 

class recRequests extends Model {
    constructor() {
        super('recrequest', validators);
    }

    readByRequester(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Requester`, validators.readByRequester(args));
    }

    readByRecommender(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recommender`, validators.readByRecommender(args));
    }
}

export default new recRequests();