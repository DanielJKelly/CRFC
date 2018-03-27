function create(model: any): Array<any> {
        return [
            model.userid,
            model.movieid,
            model.rating
        ];
    }

function destroy(model: any): Array<any> {
        return [
            model.userid,
            model.movieid
        ];
    }
function update(model: any): Array<any> {
    return [
        model.userid,
        model.movieid,
        model.rating
    ];
}

function readByUser(model: any): Array<any> {
    return [
        model.userid
    ];
}

function readByMovie(model: any): Array<any> {
    return [
        model.movieid
    ];
}

    export default {
        create,
        destroy,
        update,
        readByUser,
        readByMovie
    }
