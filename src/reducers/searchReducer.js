const initialState = {
  search: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BAR_ENTER": {
      console.log(action.search);
      return { ...state, search: action.search };
    }
    default:
      return state;
  }
};

export default searchReducer;
