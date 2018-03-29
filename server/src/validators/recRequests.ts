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

export default {
  readByRequester,
  readByRecommender,
  update,
  create
};