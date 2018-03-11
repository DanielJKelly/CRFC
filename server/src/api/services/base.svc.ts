import * as lodash from 'lodash';
import * as axios from 'axios';

const host = 'https://api.themoviedb.org/3';
const apiKey = {
    v3: process.env.MDB_API_KEY_V3,
    v4: process.env.MDB_API_KEY_V4
};

const get = (api: string) => {
    return (path?: string, query = {}) => {
        let constructedPath = configurePath([
            api, 
            pathToString(path), 
            formatQuery(query)
        ]);
    
        console.log(constructedPath);
        return axios.default.get(constructedPath, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    }
}

const formatQuery = (config = {}): string => {
    let keys = Object.keys(config);
    let values = Object.values(config);
    let length = 0;

    keys = keys.concat(['api_key']);
    values = values.concat([apiKey.v3]);

    if (keys.length === values.length) {
        length = keys.length;
    }

    let queryString = '?';

    for (let i = 0; i < length; i++) {
        queryString += `${keys[i]}=${values[i]}&`;
    }

    queryString = queryString.slice(0, queryString.length - 1);

    return queryString;
}

function configurePath(paths: string): string;
function configurePath(paths: Array<string>): string;
function configurePath(paths: any): string {
    if (lodash.isUndefined(paths)) {
        return host;
    }

    if (lodash.isString(paths)) {
        paths = [paths];
    }

    return paths.reduce((constructedPath: string, path: string): string => {
        if (lodash.isUndefined(path)) {
            return constructedPath;
        }  

        let first = path.slice(0,1);
        let last = path.slice(-1);
        
        if (first === '/') {
            path = path.slice(1);
        }
        
        if (last === '/') {
            path = path.slice(0, path.length - 1);
        }

        if (path.indexOf('?') > -1) {
            return constructedPath + path;
        }
        
        return constructedPath + '/' + path;
    }, host);
}

const pathToString = (path: any): string => {
    if (lodash.isNumber(path)) {
        path = path.toString();
    }

    if (!lodash.isString(path)) {
        return '';
    } else if (path[0] === '/') {
        return path.slice(1);
    }

    return path;
}

const crud = (api: string): ICrud => {
    if (!lodash.isString(api) || api.length === 0) {
        return;
    }

    api = api + '/';

    return {
        get: get(api)
    }
};

interface ICrud {
    get: Function;
}

export default crud;