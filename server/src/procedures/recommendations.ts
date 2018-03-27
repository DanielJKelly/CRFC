import Model from './model';
import validators from '../validators/recommendations';
import { pluralize } from '../utils'; 

class Recommendations extends Model {
    constructor() {
        super('recommendation', validators);
    }

    readByRecipient(id: number) {
      return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recipient`, this.validators.readByRecipient(id));
    }

    readByRecommender(id: number) {
      return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recommender`, this.validators.readByRecommender(id));
    }
}

export default new Recommendations();