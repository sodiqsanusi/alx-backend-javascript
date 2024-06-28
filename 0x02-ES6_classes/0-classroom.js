export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new Error('maxStudentSize should be a number');
    }

    this._maxStudentsSize = maxStudentsSize;
  }
}
