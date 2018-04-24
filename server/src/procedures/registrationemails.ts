import Model from './model';
import registrationEmailValidators from '../validators/registrationemails';
import { capitalize } from '../utils';

class RegistrationEmails extends Model {
    protected COLUMNS = {
        ID: 'id',
        CLUBID: 'clubid',
        REGISTRATIONTOKENID: 'registrationtokenid',
        EMAIL:'email',
        ISVERIFIED: 'isverified'
    };

    validators = registrationEmailValidators;

    constructor() {
        super('registrationEmail');
    }

    readByEmail(args?: any) {
        return this.row(`${this.SQL_GET}${this.model}${this.SQL_CONDITIONS.BY}${capitalize(this.COLUMNS.EMAIL)}`, this.validators.readByEmail(args));
    }
}

export default new RegistrationEmails();