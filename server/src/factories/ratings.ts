function create(model: any): Array<any> {
        return [
            model.userid,
            model.movieid,
            model.rating
        ];
    }

    export default {
        create
    }
