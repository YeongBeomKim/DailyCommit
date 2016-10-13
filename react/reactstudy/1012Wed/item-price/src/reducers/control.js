import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';
const initialState = {
  itemDataBase: []
};

export default function control(state=initialState,action){
  switch(action.type){
    case types.CREATEITEM:
      return{
        ...state,
        itemDataBase: update(state.itemDataBase,{
          $push: [action.data]
        })
      };
      case types.UPDATENUM:
        const data = state.itemDataBase[action.key];
        return{
          ...data,
          number: action.number
        };
    default:
      return state;
  }
}
