function update(model: any): Array<any> {
  return [
      model.userid,
      model.hash
  ];
}

export default {
  update
};