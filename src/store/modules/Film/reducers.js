import { film } from "../action-types";

export const initialState = {
  data:null,
  isFetching:false
}

export default (state = initialState, action) => {
  switch(action.type){
    case film.FETCH_DATA_FILM:
    return {
      ...state,
      isFetching:true,
      data:null
    };
    case film.REFRESH_DATA_FILM:
    return {
      ...state,
      isFetching:false,
      data:null
    };
    case film.GET_ALL_FILM:
      return {
        ...state,
        isFetching:false,
        data:action.payload
      };
    default:
      return state
  }
}
