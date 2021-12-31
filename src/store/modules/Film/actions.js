import { baseUrl } from "../../../utils/axios";
import { film } from "../action-types";

export const getAllFilm = () =>{
  return(dispatch) => {
    dispatch({
      type: film.FETCH_DATA_FILM
    });
    return baseUrl.get('/api/users')
    .then((response)=> {
      dispatch({
        type:film.GET_ALL_FILM,
        payload:response.data.data
      })
      return response.data.data
    })
    .catch((err)=> {
      dispatch({
        type:film.REFRESH_DATA_FILM
      });
      return false;
    });
    
  }
}
