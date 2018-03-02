import Base from './base';
import { pluralize } from '../middleware/utils.mw';

class Model extends Base {
    constructor(private model: string) {
        super();
    }

    all() {
        return (args?: any) => {
            return this.rows(`${this.SQL_GET}${pluralize(this.model)}`, args);
        };
    };
    
    create(MODEL_NAME: string) {
        return (args?: any) => {
            return this.row(`${this.SQL_INSERT}${this.model}`, args);
        };
    };
    
    read(MODEL_NAME: string) {
        return (args?: any) => {
            return this.row(`${this.SQL_GET}${this.model}`, args);
        };
    };
    
    update(MODEL_NAME: string) {
        return (args?: any) => {
            return this.empty(`${this.SQL_UPDATE}${this.model}`, args);
        };
    };
    
    destroy(MODEL_NAME: string) {
        return (args?: any) => {
            return this.empty(`${this.SQL_DELETE}${this.model}`, args);
        };
    }; 
}

export default Model;