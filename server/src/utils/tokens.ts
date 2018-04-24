import * as uuidv4 from 'uuid/v4';
import * as moment from 'moment';
import { createCipher, createDecipher, Cipher, Decipher } from 'crypto';

const ALGORITHM = 'aes-256-ctr';

const SECRET_MAP = {
    [models.TOKEN_TYPES.AUTHENTICATION]: process.env.AUTHENTICATION_SECRET,
    [models.TOKEN_TYPES.REGISTRATION]: process.env.REGISTRATION_SECRET,
    [models.TOKEN_TYPES.RESET]: process.env.RESET_SECRET
};

export function encodeRegistrationToken(registrationEmailId: number, permissions: number): string {
    return encode(models.TOKEN_TYPES.REGISTRATION, registrationEmailId, permissions);
} 

export function encodeResetToken(email: string): string {
    const expire = moment().add(1, 'hour').valueOf();
    return encode(models.TOKEN_TYPES.RESET, email, expire);
}

export function decodeRegistrationToken(token: string): { registrationEmailId: number; permissions: number; } {
    let [registrationEmailId, permissions] = decode(models.TOKEN_TYPES.REGISTRATION, token, true);

    return {
        registrationEmailId,
        permissions
    };
}

export function decodeResetToken(token: string): { email: string; expire: number; } {
    let [email, expire] = decode(models.TOKEN_TYPES.RESET, token);

    return {
        email,
        expire
    };
}

export function encodeAuthenticationToken(id: number) {
    const expire = moment().add(24, 'hour').valueOf();
    return encode(models.TOKEN_TYPES.AUTHENTICATION, id, expire);
}

export function decodeAuthenticationToken(token: string) {
    let [id, expire] = decode(models.TOKEN_TYPES.AUTHENTICATION, token, true);

    return {
        id,
        expire
    }; 
}

function encode(type: number, ...values: Array<any>) {
    const cipher = createCipher(ALGORITHM, SECRET_MAP[type]);

    let formatted = (<any>values).reduce((acc: string, curr: string | number): string => {
        return acc += `_${curr}`;
    }, '');

    formatted = `${uuidv4()}${formatted}`;

    let encoded = cipher.update(formatted, 'ascii', 'base64');
    encoded += cipher.final('base64');

    return encoded;
}

function decode(type: number, token: string, isBearer: boolean = false): any {
    const decipher = createDecipher(ALGORITHM, SECRET_MAP[type]);
    
    if (isBearer) {
        token = token.split(' ')[1];
    }

    let decoded = decipher.update(token, 'base64', 'ascii');
    decoded += decipher.final('ascii');
    const split = decoded.split('_');

    return split.slice(1);
}

