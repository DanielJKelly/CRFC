import * as lodash from 'lodash';
import { BadRequestError } from '../errors';
import { isEmail } from '../utils';
import * as uuid from 'uuid/v4';

function run(validators: Array<Function>, handleId: boolean = false) {
    let validated = validators.reduce((results: Array<any>, curr: Function): Array<any> => {
        let result = curr();

        if (lodash.isUndefined(result)) {
            result = new BadRequestError();
        }

        results.push(result);
        return results;
    }, new Array(validators.length));

    let errors = lodash.filter(validated, (v: any) => {
        if (lodash.isError(v)) {
            return v.message;
        }
    });

    if (!lodash.isEmpty(errors)) {
        let formattedErrors = errors.reduce((acc: string, curr: string): string => acc + `${curr} \n `, ``);

        throw new BadRequestError(true, formattedErrors);
    }

    if (handleId) {
        let id = uuid();
        validated.unshift(id);
    }
    
    return validated;
}

function set(arg: any, validator: Function, column?: string) {
    return wrap(arg, validator, column);
}

function wrap(arg: any, validator: Function, column?: string) {
    return () => {
        return validator(arg,column);
    };
}

function requireString(str: any, column: string = '') {
    if (lodash.isObject(str) || lodash.isBoolean(str)) {
        return new BadRequestError(true, column + ' Must be a string');
    }

    let toStr = lodash.toString(str).trim();

    return toStr;
}

function optionalString(str: string, column: string = '') {
    let toStr = lodash.toString(str);

    if (!lodash.isObject(toStr)) {
        return null;
    }

    return toStr;
}

function requireNumber(num: any, column: string = '') {
    let toNum = lodash.toNumber(num);

    if (!lodash.isFinite(toNum)) {
        return new BadRequestError(true, `${column} Must be a number`);
    }

    return toNum;
}

function optionalNumber(num: any, column: string = '') {
    let toNum = lodash.toNumber(num);

    if (!lodash.isFinite(toNum)) {
        return null;
    }

    return toNum;
}

function requireEmail(email: string) {
    if (!isEmail(email)) {
        return new BadRequestError(true, `You must pass in an email`);
    }

    return email;
}

export {
    run,
    set,
    requireEmail,
    requireNumber,
    requireString,
    optionalNumber,
    optionalString
};

