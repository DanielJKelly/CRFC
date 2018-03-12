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
        let copied: models.server.TMDB.IMovieDataFromServer = copy({}, film);

        return {
            tmdbId: copied.id, 
            title: copied.title,
            originalTitle: copied.original_title,
            overview: copied.overview,
            posterPath: copied.poster_path,
            releaseDate: copied.release_date,
            runtime: copied.runtime
        };
    });

    if (single) {
        return res[0];
    }

    return res;
};
