import Model from './model';
import recommendationValidators from '../validators/recommendations';
import { pluralize } from '../utils'; 

class Recommendations extends Model {
    protected COLUMNS = {
        RECOMMENDERID: 'recommenderid',
        RECIPIENTID: 'recipientid',
        MOVIEID: 'movieid',
        ISSEEN: 'isseen'
    };

    validators = recommendationValidators;
    
    constructor() {
        super('recommendation');
    }

    readByRecipient(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recipient`, this.validators.readByRecipient(args));
    }

    readByRecommender(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recommender`, this.validators.readByRecommender(args));
    }
}

export default new Recommendations();