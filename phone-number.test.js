const checkPhoneNumber = require('./phone-number');

test('should return true for 949-123-4567', () => {
  expect(checkPhoneNumber('949-123-4567')).toBe(true);
});

test('should return true for (949) 123-9876', () => {
  expect(checkPhoneNumber('(949) 123-9876')).toBe(true);
});

test('should return true for (949)123-9876', () => {
  expect(checkPhoneNumber('(949)123-9876')).toBe(true);
});

test('should return false for empty string', () => {
  expect(checkPhoneNumber('')).toBe(false);
});

test('should return true for 111-1111111', () => {
  expect(checkPhoneNumber('111-1111111')).toBe(true);
});

test('should return true for 2222222222', () => {
  expect(checkPhoneNumber('2222222222')).toBe(true);
});

test('should return false for 949-123-45678', () => {
  expect(checkPhoneNumber('949-123-45678')).toBe(false);
});

test('should return false for +1949-123-4567', () => {
  expect(checkPhoneNumber('+1949-123-4567')).toBe(false);
});

test('should return false for abc', () => {
  expect(checkPhoneNumber('abc')).toBe(false);
});