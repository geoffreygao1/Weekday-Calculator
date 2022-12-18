import Dates from './../src/weekday.js';

describe('Dates', () => {
  let testDate;

  beforeEach(() => {
    testDate = new Dates();
  });

  test('should create a Date object with a longDate and a weekday property', () => {
    expect(testDate.longDate).toEqual('');
    expect(testDate.weekday).toEqual('');
  });

});