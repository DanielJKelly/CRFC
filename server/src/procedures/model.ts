import Base from './base';
import { pluralize, capitalize } from '../utils';

class Model extends Base {    
    /**
     * 
     * @param model 
     * @description must be singular 
     */
    constructor(protected model: string, protected validators: {
        all?: Function,
        create?: Function,
        read?: Function,
        update?: Function,
        destroy?: Function
    }) {
        super();
        
        this.model = capitalize(this.model);
    }

    all(args?: any): Promise<Array<Array<any>>> {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}`, this.validators.all(args));
    }
    
    create(args?: any): Promise<Array<any>> {
        return this.row(`${this.SQL_INSERT}${this.model}`, this.validators.create(args));
    }
    
    read(args?: any): Promise<Array<any>> {
        return this.row(`${this.SQL_GET}${this.model}`, this.validators.read(args));
    }
    
    update(args?: any): Promise<void> {
        return this.empty(`${this.SQL_UPDATE}${this.model}`, this.validators.update(args));
    }
    
    destroy(args?: any): Promise<void> {
        return this.empty(`${this.SQL_DELETE}${this.model}`, this.validators.destroy(args));
    } 
}

export default Model;