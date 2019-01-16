import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import searchReducer from "./searchReducer";
import wasteReducer from "./wasteReducer";
export default combineReducers({
  favorites: favoriteReducer,
  search: searchReducer,
  wastes: wasteReducer
});
