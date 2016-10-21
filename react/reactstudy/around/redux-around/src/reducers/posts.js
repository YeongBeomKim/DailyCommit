import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';
const initialState = {
  DataBase: []
};
export default function posts(state=initialState,action){
  switch(action.type){
    case types.CREATEPOST:
      return{
        ...state,
        DataBase: update(state.DataBase,{
          $push: [action.data]
        })
      };
    default:
      return state;
  }
}
