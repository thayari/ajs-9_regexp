export default class Validator {
  constructor(name) {
    this.name = Validator.validateUsername(name);
  }

  static validateUsername(name) {
    const check = name.search(/[^\w-]|[\d]{3}|^[\d_-]|[\d_-]$/);
    if (check !== -1) {
      throw new Error('Incorrect username');
    }
    return name;
  }
}
