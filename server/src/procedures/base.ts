import { procedure } from '../config/db';
import { ServerError } from '../errors';

class Base {
    protected PREFIX = 'sp';
    protected SQL_GET = `${this.PREFIX}Get`;
    protected SQL_INSERT = `${this.PREFIX}Insert`;
    protected SQL_UPDATE = `${this.PREFIX}Update`;
    protected SQL_DELETE = `${this.PREFIX}Delete`;
    protected SQL_CONDITIONS = {
        BY: 'By',
        FROM: 'From',
        WITH: 'With'
    };

    private rowsets(procedureName: string, args: Array<any> = []): Promise<Array<Array<any>>> {
        return procedure(procedureName, args).catch((err: any) => {
            throw new ServerError(true, err.message);
        });
    }
    
    protected async rows(procedureName: string, args: Array<any> = []): Promise<Array<any>> {
        const rowsets: Array<Array<any>> = await this.rowsets(procedureName, args);
        return rowsets[0];
    }
    
    protected async row(procedureName: string, args: Array<any> = []): Promise<any> {
        const rows = await this.rows(procedureName, args)
        return rows[0];
    }
    
    protected async single(procedureName: string, args: Array<any> = []): Promise<any> {
        const row = await this.row(procedureName, args)
        return row[0];
    }
    
    protected async empty(procedureName: string, args: Array<any> = []): Promise<void> {
        await this.rowsets(procedureName, args);
        return;
    }
}

export default Base;