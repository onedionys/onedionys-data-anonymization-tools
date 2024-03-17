// test/anonymization.test.js

const assert = require('assert');
const anonymize = require('../src/anonymization');

describe('Anonymization', function () {
  it('should anonymize data correctly', function () {
    const data = { name: 'John', email: 'john@example.com', phone: '123-456-7890' };
    const anonymizedData = anonymize(data);
    assert.deepStrictEqual(anonymizedData, { name: 'John', email: '***', phone: '***' });
  });
});
