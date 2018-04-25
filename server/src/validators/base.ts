import * as joi from 'joi';
import { 
    BadRequestError, 
} from '../errors';

export function validate(schema: joi.Schema, model: any) {
    let { error, value }: joi.ValidationResult<any> = schema.validate(model);

    if (error) {
        throw new BadRequestError(true, error.message);
    }

    return value;
}

export function mapRequired<T>(schema: joi.ObjectSchema, required: Array<string> = []): (model: T) => T {
    return (model: T) => {
        return validate(
            schema.requiredKeys(required), 
            model,
        ); 
    };
}

export interface IRequiredKeys {
    ALL: Array<string>;
    CREATE: Array<string>;
    READ: Array<string>;
    UPDATE: Array<string>;
    DESTROY: Array<string>;
}