function create(model: any): [number, number, number] {
        return [
            model.userid,
            model.movieid,
            model.rating
        ];
    }

function destroy(model: any): [number, number] {
        return [
            model.userid,
            model.movieid
        ];
    }
function update(model: any): [number, number, number] {
    return [
        model.userid,
        model.movieid,
        model.rating
    ];
}

function readByUser(model: any): [number] {
    return [
        model.id
    ];
}

function readByMovie(model: any): [number] {
    return [
        model.id
    ];
}

    export default {
        create,
        destroy,
        update,
        readByUser,
        readByMovie
    }
