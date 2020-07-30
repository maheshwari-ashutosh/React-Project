export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITION = 'ADDITION';
export const SUBTRACTION = 'SUBTRACTION';
export const STORE = 'STORE';
export const REMOVE = 'REMOVE';

export const increment = () => {
  return {
    type: INCREMENT,
  }
};
export const decrement = () => {
  return {
    type: DECREMENT,
  }
};
export const addition = (value) => {
  return {
    type: ADDITION,
    value,
  }
};
export const subtraction = (value) => {
  return {
    type: SUBTRACTION,
    value,
  }
};
export const store = (result) => {
  return {
    type: STORE,
    result,
  }
};
export const remove = (id) => {
  return {
    type: REMOVE,
    id,
  }
};