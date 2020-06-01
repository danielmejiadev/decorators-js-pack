// Dependencies
import humps from 'humps';

// Under test
import transform from '../index';

/**
 * @file transformer.decorator.spec.js
 * @author Daniel Mejia
 * @descriptiocn Test file transform decorator.
 */
describe('Transform decorator', () => {
  const responseValue = {
    i_d: 1,
  };
  class Test {
    response: unknown;

    constructor(response: unknown) {
      this.response = response;
    }

    @transform
    testMethod(param: unknown) {
      const value = {};
      Object.assign(value, this.response);
      this.response = param;
      return Promise.resolve(value);
    }
  }
  const testObject = new Test(responseValue);

  it('should apply decorator', async () => {
    const params = { nameWithValue: 'value' };
    const response = await testObject.testMethod(params);
    expect(response).toEqual(humps.camelizeKeys(responseValue));
    expect(testObject.response).toEqual(humps.decamelizeKeys(params));
  });
});
