import Model from './model';
import validators from '../factories/recommendations';
import { pluralize } from '../utils'; 

class Recommendations extends Model {
    constructor() {
        super('recommendation', validators);
    }

    readByRecipient(recipientid: number) {
      return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Recipient`, [recipientid]);
    }
}

export default new Recommendations();