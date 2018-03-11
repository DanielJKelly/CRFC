import ERROR_CODES from '../../errors';
import * as lodash from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { camelCase, camel } from 'change-case';

export const prune = (response: any) => {
    if (lodash.isUndefined(response) || lodash.isEmpty(response) || response.status !== ERROR_CODES.OK) {
        throw new Error();
    }

    let toMap = [];
    let single = false;

    if (response.data && response.data.results) {
        toMap = response.data.results;
    } else {
        single = true;
        toMap.push(response.data);
    }

    const res = toMap.map((film: models.server.TMDB.IMovieDataFromServer): models.server.TMDB.IMovieData => {
        let formatted: models.server.TMDB.ICamelCasedMovieDataFromServer = format({}, film);

        return {
            tmdbId: formatted.id, 
            title: formatted.title,
            originalTitle: formatted.originalTitle,
            overview: formatted.overview,
            posterPath: formatted.posterPath,
            releaseDate: formatted.releaseDate,
            runtime: formatted.runtime
        };
    });

    if (single) {
        return res[0];
    }

    return res;
};

const format = (destination: any = {}, ...sources: Array<any>) => {
    if (lodash.isEmpty(sources)) {
        sources.push(destination);
    }

    sources.forEach((source: any) => {
        if (!lodash.isObject(source)) {
            return;
        }

        let keys = Object.keys(source);

        keys.forEach((key) => {
            let value = source[key];
            key = camelCase(key);

            if (lodash.isArray(value)) {
                format(destination[key] || (destination[key] = []), value);
                return;
            } else if (lodash.isObject(value)) {
                format(destination[key] || (destination[key] = {}), value);
                return;
            }
    
            destination[key] = value;
        });
    });

    return destination;
};
