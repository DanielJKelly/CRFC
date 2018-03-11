import ERROR_CODES from '../../errors';
import * as lodash from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { toCamelCase, copy } from '../../utils';

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
        let formatted: models.server.TMDB.ICamelCasedMovieDataFromServer = copy({ toCamelCase: true }, {}, film);

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
