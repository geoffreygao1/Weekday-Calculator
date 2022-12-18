import Dates from './../src/weekday.js';

describe('Dates', () => {
  let testDate;

  beforeEach(() => {
    testDate = new Dates();
  });

  test('should create a Dates object with a longDate and a weekday property', () => {
    expect(testDate.longDate).toEqual('');
    expect(testDate.weekday).toEqual('');
  });

  test('should update weekday property to day of the week', () => {
    testDate.longDate = '2022-12-18';
    testDate.getDay();
    expect(testDate.weekday).toEqual('Sunday');
  });
});