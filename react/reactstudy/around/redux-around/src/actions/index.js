import * as types from './ActionTypes';

export function createPost(data){
  return{
    type: types.CREATEPOST,
    data
  };
}
