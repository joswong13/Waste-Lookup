const initialState = {
  favorites: "",
  numberOfFavorites: 0
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITES": {
      console.log("ADD TO FAVORITES STATE");
      return {
        ...state,
        favorites: [...state.favorites, action.favorite]
      };
    }

    case "DELETE_FAVORITES": {
      //let currentFavorites = state.favorites;

      let currentFavorites = state.favorites.filter(favItems => {
        return favItems.shopifyID !== action.favoriteDelete.shopifyID;
      });

      console.log("DELETE_FAVORITES", currentFavorites);
      return { ...state, favorites: currentFavorites };
    }

    default:
      return state;
  }
};

export default favoriteReducer;
