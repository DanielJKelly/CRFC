function readByRecommender(model: any): [number] {
    return [
        model.id
  ];
}

function readByRequester(model: any): [number] {
    return [
        model.id
  ];
}

function update(model: any): [number] {
  return [
        model.id
  ];
}

function create(model: any): [number, number] {
    return [
        model.requesterid,
        model.recommenderid 
  ];
}

function destroy(model: any): [number] {
    return [
        model.id
    ];
}

export default {
  readByRequester,
  readByRecommender,
  update,
  create,
  destroy
};