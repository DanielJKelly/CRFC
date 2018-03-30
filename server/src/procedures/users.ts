import Model from './model';
import validators from '../validators/users';
import { pluralize } from '../utils';

class Users extends Model {
    constructor() {
        super('user', validators);
    }

    readByEmail(email: string) {
        return this.row(`${this.SQL_GET}${this.model}${this.SQL_CONDITIONS.BY}Email`, [email]);
    }

    readByMovie(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Movie`, validators.readByMovie(args));
    }
}

export default new Users();