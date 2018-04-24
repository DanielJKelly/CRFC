declare module Express {
    interface Response {
        error?: any;
        body?: any;
        promise?: Promise<any>;
    }
}

declare module models {
    interface IValidators {
        all?: Function;
        create?: Function;
        read?: Function;
        update?: Function;
        destroy?: Function;
    }

    export const enum TOKEN_TYPES {
        AUTHENTICATION,
        REGISTRATION,
        RESET
    }

    export const enum FORM_TYPES {
        CREATE = 'create',
        FULLUPDATE = 'fullUpdate',
        PARTIALUPDATE = 'partialUpdate'
    }

    interface ICreateForm {
        meta: any;
        fields: Array<IFormField>;
    }

    interface IFormField {
        name: string;
        label: string;
        type: string;
        required?: boolean;
        meta?: any;
    }

    interface IRegistrationToken {
        id?: number;
        permissions?: number;
        _created?: any;
    }

    interface IRegistrationEmail {
        id?: number;
        registrationtokenid?: number;
        email?: string;
        isverified?: boolean;
        _created?: any;
    }

    namespace server {
        namespace TMDB {
            interface IMovie {
                code: number;
                data: IMovieDataFromServer;
            }

            interface IMovieDataFromServer {
                adult?: boolean;
                backdrop_path?: string;
                belongs_to_collection?: any;
                budget?: number;
                genres?: Array<{id?: number; name?: string;}>;
                homepage?: string;
                id?: number;
                imdb_id?: string;
                original_language?: string;
                original_title?: string;
                overview?: string;
                popularity?: number;
                poster_path?: string;
                production_companies?: Array<{ id?: number; logo_path:string; name?: string; origin_country?: string; }>;
                production_countries?: Array<{ iso_3166_1?: string; name?: string; }>;
                release_date?: string;
                revenue?: number;
                runtime?: number;
                spoken_languages?: Array<{ iso_639_1?: string; name?: string; }>; 
                status?: string;
                tagline?: string;
                title?: string;
                video?: boolean;
                vote_average?: string;
                vote_count?: string;
            }

            interface ICamelCasedMovieDataFromServer {
                adult?: boolean;
                backdropPath?: string;
                belongsToCollection?: any;
                budget?: number;
                genres?: Array<{id?: number; name?: string;}>;
                homepage?: string;
                id?: number;
                imdbId?: string;
                originalLanguage?: string;
                originalTitle?: string;
                overview?: string;
                popularity?: number;
                posterPath?: string;
                productionCompanies?: Array<{ id?: number; logoPath:string; name?: string; originCountry?: string; }>;
                productionCountries?: Array<{ iso31661?: string; name?: string; }>;
                releaseDate?: string;
                revenue?: number;
                runtime?: number;
                spokenLanguages?: Array<{ iso6391?: string; name?: string; }>; 
                status?: string;
                tagline?: string;
                title?: string;
                video?: boolean;
                voteAverage?: string;
                voteCount?: string;
            }

            interface IMovieData {
                tmdbId?: number;
                originalTitle?: string;
                overview?: string;
                posterPath?: string;
                releaseDate?: string;
                runtime?: number;
                title?: string;
            }
        }
    }
}