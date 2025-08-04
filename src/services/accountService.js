import axios from './httpRequester';

/*args에는 아래 같은 객체가 들어감 (state.form)
{
  name: '홍길동',
  loginId: 'hong@example.com',
  loginPw: '1234'
}
*/
export const join = (args) => {
  return axios.post('/account/join', args).catch((e) => e.response);
};

export const login = (args) => {
  return axios.post('/account/login', args).catch((e) => e.response);
};

export const check = () => {
  ``;
  return axios.get('/account/check').catch((e) => e.response);
};

export const logout = () => {
  return axios.post('/account/logout').catch((e) => e.response);
};
