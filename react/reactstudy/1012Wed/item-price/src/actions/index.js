import * as types from './ActionTypes';

export function createItem(data){
  return{
    type: types.CREATEITEM,
    data
  };
}
export function updateNum(number,key){
  return{
    type: types.UPDATENUM,
    number,
    key
  }
}
