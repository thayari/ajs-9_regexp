import Validator from '../src/app';

test('username is correct', () => {
  const validate = new Validator('abc-d_45ef');
  expect(validate.name).toBe('abc-d_45ef');
});

describe('wrong username', () => {
  function result(name) {
    const validate = new Validator(name);
  }
  test('1', () => {
    expect(() => { result('1qwerty'); }).toThrow('Incorrect username');
  });
  test('2', () => {
    expect(() => { result('qw1236ert'); }).toThrow('Incorrect username');
  });
  test('3', () => {
    expect(() => { result('qwert1'); }).toThrow('Incorrect username');
  });
  test('4', () => {
    expect(() => { result('-qwert'); }).toThrow('Incorrect username');
  });
  test('5', () => {
    expect(() => { result('dfgh%jk'); }).toThrow('Incorrect username');
  });
  test('6', () => {
    expect(() => { result('qwer_'); }).toThrow('Incorrect username');
  });
});
