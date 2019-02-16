// import 'raf/polyfill';
import 'dva';
import * as expect from 'expect';
import LoginModel from '../../src/models/login';

describe('models/login', () => {
  test('The namespace validate for this model:', () => {
    expect(LoginModel.namespace).toEqual('login');
  });
  describe('test states', () => {
    it('validate initial state.', () => {
      expect(LoginModel.state).toBeDefined();
      expect(LoginModel.state).toMatchObject({
        changeLoginStatus: {},
        user: [],
      });
    });
  });

  describe('test reducers', () => {
    it('validate reducer function:', () => {
      expect(LoginModel.reducers).toBeDefined();
      expect(LoginModel.reducers.setState({}, { payload: { test: {} } })).toMatchObject({
        test: {},
      });
    });
  });

  describe('test effects', () => {
    it('validate effects function:', () => {
      expect(LoginModel.effects).toBeDefined();
      const { accountSubmit } = LoginModel.effects;
      accountSubmit({ payload: { username: '8888' } });
    });
  });
});
