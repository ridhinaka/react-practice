import { combineReducers } from "redux";
import filmReducer from './Film/reducers'

const reducer = combineReducers({
  film:filmReducer
})

export default reducer