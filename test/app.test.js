import Validator from '../src/app';

test('username is correct', () => {
  const validate = new Validator('abc-d_45ef');
  expect(validate.name).toBe('abc-d_45ef');
});

const cases = ['1qwerty', 'qw1236ert', 'qwert1', '-qwert', 'dfgh%jk', 'qwer_'];
function result(name) {
  const validate = new Validator(name);
}

describe('wrong username', () => {
  test('1', () => {
    expect(() => { result(cases[0]); }).toThrow('Incorrect username');
  });
  test('2', () => {
    expect(() => { result(cases[1]); }).toThrow('Incorrect username');
  });
  test('3', () => {
    expect(() => { result(cases[2]); }).toThrow('Incorrect username');
  });
  test('4', () => {
    expect(() => { result(cases[3]); }).toThrow('Incorrect username');
  });
  test('5', () => {
    expect(() => { result(cases[4]); }).toThrow('Incorrect username');
  });
  test('6', () => {
    expect(() => { result(cases[5]); }).toThrow('Incorrect username');
  });
});
