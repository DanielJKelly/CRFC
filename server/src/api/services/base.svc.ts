import * as lodash from 'lodash';
import * as axios from 'axios';

export default abstract class BaseService {
    static host = 'https://api.themoviedb.org/3';
    static readonly apiKey = {
        v3: '82f6200a5562879c5061eb937973fa1d',
        v4: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmY2MjAwYTU1NjI4NzljNTA2MWViOTM3OTczZmExZCIsInN1YiI6IjVhOTk2NTEzYzNhMzY4MGI5OTAwYmQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9jQoTTCXdZfKdrKriOoSrqHp5yMhGveyg9oRH7Gh3s0'
    };
    
    protected api: string = '';   

    constructor(api: string) {
        if (!lodash.isString(api) || api.length === 0) {
            return;
        }

        this.api = api + '/';
    }

    protected get(path?: string) {
        let constructedPath = this.configurePath([
            this.api, 
            this.pathToString(path), 
            this.formatQuery()
        ]);

        console.log(constructedPath);
        return axios.default.get(constructedPath, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    }

    private formatQuery(): string {
        return `?api_key=${BaseService.apiKey.v3}`;
    }

    private configurePath(paths: string): string;
    private configurePath(paths: Array<string>): string;
    private configurePath(paths: any): string {
        if (lodash.isUndefined(paths)) {
            return BaseService.host;
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
        }, BaseService.host);
    }

    private pathToString(path: any): string {
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
}