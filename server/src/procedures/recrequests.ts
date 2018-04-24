import Model from './model';
import recrequestValidators from '../validators/recrequests';
import { pluralize } from '../utils'; 

class recRequests extends Model {
    protected COLUMNS = {
        REQUESTERID: 'requesterid',
        RECOMMENDERID: 'recommenderid',
        ISFULFILLED: 'isfulfilled'
    };

    validators = recrequestValidators;

    constructor() {
        super('recrequest');
    }

    readByRequester(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Requester`, this.validators.readByRequester(args));
    }

    readByRecommender(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recommender`, this.validators.readByRecommender(args));
    }
}

export default new recRequests();