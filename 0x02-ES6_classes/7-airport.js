const util = require("util");

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [util.inspect.custom]() {
    return `${Airport.name} [${this.code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
