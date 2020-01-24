import { SEND_NAME } from 'redux/actionTypes'

const initialState = {
  name: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}