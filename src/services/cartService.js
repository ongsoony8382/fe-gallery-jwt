import axios from './httpRequester';
const path = '/cart';

export const addItem = (itemId) => {
  return axios.post(path, { itemId }).catch((e) => e.response);
};

export const getItems = () => {
  return axios.get(path).catch((e) => e.response);
};

export const removeItem = (cart_id) => {
  return axios.delete(`${path}/${cart_id}`).catch((e) => e.response);
};

export const removeAllItem = () => {
  return axios.delete(path).catch((e) => e.response);
};
