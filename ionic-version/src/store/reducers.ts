import { Action } from "@ngrx/store";
import { ADD_LIST, SORT_LIST, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './actions';

const initLists = [
  { id: 1, name: 'Home', bgColor: '#9147A7' },
  { id: 2, name: 'GA', bgColor: '#00A087' },
  { id: 3, name: 'Doggy doggy', bgColor: '#1F81B4' }
];

export const listsReducer = (state = initLists, action: Action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];

    case SORT_LIST:
      return action.payload;

    default:
      return state;
  }
}


export const itemsReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    case UPDATE_TASK:
      return state.map(item => { return item.id === action.payload.id ? Object.assign({}, item, action.payload) : item; });

    case DELETE_TASK:
      return state.filter(item => { return item.id !== action.payload.id; });

    default:
      return state;
  }
}
