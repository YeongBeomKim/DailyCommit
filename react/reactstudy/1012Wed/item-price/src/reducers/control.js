import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';
const initialState = {
  itemDataBase: [
    {item: '',price: '',number: 1},
    {}
  ]
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
        return{
          ...state,
          itemDataBase: update(state.itemDataBase,
          {
            [action.key]: {
              number: {$set: action.number}
            }
          })
        };
    default:
      return state;
  }
}
