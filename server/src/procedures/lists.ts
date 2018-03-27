import Model from './model';
import validators from '../validators/lists';
import { pluralize } from '../utils';

class Lists extends Model {
    constructor() {
        super('list', validators);
    }

    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, this.validators.readByUser(args));
    }
}

   


export default new Lists();