import Base from './base';
import { pluralize, capitalize } from '../utils';

import { clone } from 'lodash';

class Model extends Base {    
    protected validators: models.IValidators;
    protected COLUMNS: { [column: string]: string; };
    protected FORM: Array<models.IFormField>;
    
    constructor(protected model: string) {
        super();
        
        this.model = capitalize(this.model);
    }

    all(args?: any): Promise<Array<any>> {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}`, this.validators.all(args));
    }
    
    create(args?: any): Promise<any> {
        return this.row(`${this.SQL_INSERT}${this.model}`, this.validators.create(args));
    }
    
    read(args?: any): Promise<any> {
        return this.row(`${this.SQL_GET}${this.model}`, this.validators.read(args));
    }
    
    update(args?: any): Promise<void> {
        return this.empty(`${this.SQL_UPDATE}${this.model}`, this.validators.update(args));
    }
    
    destroy(args?: any): Promise<void> {
        return this.empty(`${this.SQL_DELETE}${this.model}`, this.validators.destroy(args));
    } 

    form(type: string): models.ICreateForm {
        let fields = clone(this.FORM);

        let filtered = fields.filter((value: models.IFormField) => {  
            let meta = { ...{ 
                [models.FORM_TYPES.CREATE]: {
                    available: true,
                    required: true
                },
                [models.FORM_TYPES.FULLUPDATE]: {
                    available: true,
                    required: true
                },
                [models.FORM_TYPES.PARTIALUPDATE]: {
                    available: true,
                    required: true
                }
            }, ...value.meta || {}};

            if (!meta[type].available) {
                return false;
            }

            if (meta[type].available && meta[type].required) {
                value.required = true;
            }

            delete value.meta;

            return true;
        });
        
        return {
            meta: {
                href: `http://localhost:3000/api/v1/${this.model.toLowerCase()}`,
                type: 'form',
                method: 'POST'
            },
            fields: filtered
        }
    }
}

export default Model;