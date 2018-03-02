import { PoolConfig, createPool, MysqlError, PoolConnection } from 'mysql';
import { isArray } from 'lodash';

export default () => {};

const poolConfig: PoolConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: Number(process.env.CONNECTION_LIMIT) || 2
};

export const pool = createPool(poolConfig);

const formatArguments = (args: Array<any> = []) => {
    if (!isArray(args) || args.length === 0) {
        return '();';
    }

    let sql = '(';

    for (let i = 0, length = args.length - 1; i < length; ++i) {
        sql += '?, ';
    }

    sql += '?);';

    return sql;
};

const query = (sql: string, args: Array<any>): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
        pool.getConnection((err: MysqlError, connection: PoolConnection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, args, (err, resultsets: Array<any>) => {
                    connection.release();

                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
};

export const procedure = (
    procedure: string,
    args: Array<any> = []
): Promise<Array<Array<any>>> => {
    return query(`CALL ${procedure}${formatArguments(args)}`, args);
};