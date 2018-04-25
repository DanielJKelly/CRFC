import * as joi from 'joi';
import {
    validate,
    mapRequired,
    IRequiredKeys,
} from './base';
import {
    ObjectSchema,
} from 'joi';

const KEYS = {
    _CURRENT_OBJECT: '',
    ID: 'id',
    MDBID: 'mdbid',
    TITLE: 'title',
    DIRECTOR: 'director',
    POSTER: 'poster'
};

const MovieSchema: ObjectSchema = joi.object().keys({
    mdbid: joi.number().positive(),
    title: joi.string().max(256),
    director: joi.string().max(128),
    poster: joi.string().max(256)
});

const REQUIRED: IMovieRequiredKeys = {
    ALL: [
    ],
    CREATE: [
        KEYS._CURRENT_OBJECT,
        KEYS.MDBID,
        KEYS.TITLE,
        KEYS.DIRECTOR,
        KEYS.POSTER,
    ],
    READ: [
        KEYS._CURRENT_OBJECT,
        KEYS.ID,
    ],
    UPDATE: [
        KEYS._CURRENT_OBJECT,
        KEYS.ID,
    ],
    DESTROY: [
        KEYS._CURRENT_OBJECT,
        KEYS.ID, 
    ],
    READ_BY_DIRECTOR: [
        KEYS._CURRENT_OBJECT,
        KEYS.DIRECTOR
    ],
    READ_BY_USER: [
        KEYS._CURRENT_OBJECT,
        KEYS.ID
    ]
};

function create(validated: Partial<models.IAppMovie>): Array<any> {
    return [
        validated.mdbid,
        validated.title,
        validated.director,
        validated.poster
    ];
}

function all(): Array<any> {
    return [];
}

function readByDirector(validated: Partial<models.IAppMovie>): Array<any> {
    return [
        validated.director
    ];
}

function destroy(validated: any): [number] {
    return [
        validated.id
    ];
}

function readByUser(validated: any): [number] {
    return [
        validated.id
    ];
}

function update(validated: any): [number, number, string, string, string] {
    return [
        validated.id,
        validated.mdbid,
        validated.title,
        validated.director,
        validated.poster
    ];
}

export default {
    create: mapRequired<Partial<models.IAppMovie>>(MovieSchema, REQUIRED.CREATE),
    all: mapRequired<Partial<models.IAppMovie>>(MovieSchema, REQUIRED.ALL),
    readByDirector: mapRequired<Partial<models.IAppMovie>>(MovieSchema, REQUIRED.READ_BY_DIRECTOR),
    destroy: mapRequired<Partial<models.IAppMovie>>(MovieSchema, REQUIRED.DESTROY),
    readByUser: mapRequired<Partial<models.IAppMovie>>(MovieSchema, REQUIRED.READ_BY_USER),
    update: mapRequired<Partial<models.IAppMovie>>(MovieSchema, REQUIRED.UPDATE)
};

interface IMovieRequiredKeys extends IRequiredKeys {
    READ_BY_DIRECTOR: Array<string>;
    READ_BY_USER: Array<string>;
}