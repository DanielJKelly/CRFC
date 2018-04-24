import Model from './model';
import listValidators from '../validators/lists';
import { pluralize, capitalize } from '../utils';

class Lists extends Model {
    protected COLUMNS = {
        USERID: 'userid',
        NAME: 'name',
        ISORDERED: 'isOrdered'
    };

    validators = listValidators;
    
    constructor() {
        super('list');
    }
    
    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, this.validators.readByUser(args));
    }

    createListItem(args: any) {
        return this.rows(`${this.SQL_INSERT}${pluralize(this.model)}MoviesXRef`, this.validators.createListItem(args));
    }

    readById(args: any) {
        return this.rows(`${this.SQL_GET}${this.model}${this.SQL_CONDITIONS.BY}Id`, this.validators.readById(args));
    }

    destroyFromList(args: any) {
        return this.empty(`${this.SQL_DELETE}${pluralize(this.model)}MoviesXRef`, this.validators.destroyFromList(args));
    }
}

   


export default new Lists();