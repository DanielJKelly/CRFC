import Base from './base';
import { pluralize, capitalize } from '../utils';

class Model extends Base {
    /**
     * 
     * @param model 
     * @description must be singular 
     */
    constructor(protected model: string) {
        super();
        
        this.model = capitalize(this.model);
    }

    all(args?: any): Promise<Array<Array<any>>> {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}`, args);
    }
    
    create(args?: any): Promise<Array<any>> {
        return this.row(`${this.SQL_INSERT}${this.model}`, args);
    }
    
    read(args?: any): Promise<Array<any>> {
        return this.row(`${this.SQL_GET}${this.model}`, args);
    }
    
    update(args?: any): Promise<void> {
        return this.empty(`${this.SQL_UPDATE}${this.model}`, args);
    }
    
    destroy(args?: any): Promise<void> {
        return this.empty(`${this.SQL_DELETE}${this.model}`, args);
    } 
}

export default Model;