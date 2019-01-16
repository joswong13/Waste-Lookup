const initialState = {
  wastes: []
};

const wasteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WASTE_LIST": {
      //axios passes in the entire waste list into the redux store
      return { ...state, wastes: action.wasteList };
    }
    case "CHANGE_ITEM_FAV_STATUS": {
      let stateCopy = state.wastes;
      //Passes in the shopifyID and then !favoritedInSearch. (Flips false to true and vice versa)
      stateCopy[action.wasteItem.shopifyID].favoritedInSearch = !action
        .wasteItem.favoritedInSearch;

      return { ...state, wastes: stateCopy };
    }
    default:
      return state;
  }
};

export default wasteReducer;
