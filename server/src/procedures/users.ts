import Model from './model';
import validators from '../factories/users';

class Users extends Model {
    constructor() {
        super('user', validators);
    }

    readByEmail(email: string) {
        return this.row(`${this.SQL_GET}${this.model}${this.SQL_CONDITIONS.BY}Email`, [email]);
    }
}

export default new Users();