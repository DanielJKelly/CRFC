import {
  run,
  set,
  requireEmail,
  requireNumber
} from './base';

function create(model: models.IRegistrationEmail): any {
  return run([
      set(model.email, requireEmail)
  ], true);
}

function read(model: any): [number] {
  return [
      model.id
  ];
}

function update(model: any): [number, boolean] {
  return [
      model.id,
      model.isverified
  ];
}

function destroy(model: any): [number] {
  return [
      model.id
  ];
}

function readByEmail(model: any): [number] {
  return [
      model.email
  ];
}

interface IRegistrationEmailValidators extends models.IValidators {
  readByEmail?: Function;
}

const validators: IRegistrationEmailValidators = {
  create,
  read,
  update,
  destroy,
  readByEmail
};

export default validators;