import { ADD_LIST, SORT_LIST, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './actions';

export const operations = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_LIST:
      return [...state, payload];

    case SORT_LIST:
      return [...state, payload];

    case ADD_TASK:
      return [...state, payload];

    case UPDATE_TASK:
      return state.map(item => { return item.id === payload.id ? Object.assign({}, item, payload) : item; });

    case DELETE_TASK:
      return state.filter(item => { return item.id !== payload.id; });

    default:
      return state;
  }
}
