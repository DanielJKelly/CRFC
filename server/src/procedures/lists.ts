import Model from './model';
import validators from '../validators/lists';
import { pluralize } from '../utils';

class Lists extends Model {
    constructor() {
        super('list', validators);
    }

    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, validators.readByUser(args));
    }

    createListItem(args: any) {
        return this.rows(`${this.SQL_INSERT}${pluralize(this.model)}MoviesXRef`, validators.createListItem(args));
    }

    readById(args: any) {
        return this.rows(`${this.SQL_GET}${this.model}${this.SQL_CONDITIONS.BY}Id`, validators.readById(args));
    }

    destroyFromList(args: any) {
        return this.empty(`${this.SQL_DELETE}${pluralize(this.model)}MoviesXRef`, validators.destroyFromList(args));
    }
}

   


export default new Lists();