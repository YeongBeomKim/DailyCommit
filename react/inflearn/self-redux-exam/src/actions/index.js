import * as types from './ActionTypes';

export function increment(){
  return{
    type: types.INCREMENT
  };
}
export function decrement(){
  return{
    type: types.DECREMENT
  };
}
export function setFontColor(color){
  return{
    type: types.SET_FONTCOLOR,
    color
  };
}
