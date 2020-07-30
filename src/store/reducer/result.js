import {STORE, REMOVE} from '../actions/actions';

const initialState = {
  result: [],
}

const reducer = (state = initialState, action) => {
  
  if(action.type === STORE) {
    return {
      ...state,
      result: state.result.concat({id: new Date(), value: action.result}),
    }
  }
  if(action.type === REMOVE) {
    const result = state.result.filter(item => item.id !== action.id)
    return {
      ...state,
      result
    }
  }
  
  return state;
}

export default reducer;