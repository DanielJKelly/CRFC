import {
  set,
  run,
  requireNumber
} from './base';

function create(model: any): Array<any> {
  return run([
      set(model.permissions, requireNumber)
  ]);
}

function read(model: any): Array<any> {
  return [
      model.id
  ];
}

function destroy(model: any): Array<any> {
  return [
      model.id
  ];
}

const validators: models.IValidators = {
  create,
  read,
  destroy
}

export default validators;