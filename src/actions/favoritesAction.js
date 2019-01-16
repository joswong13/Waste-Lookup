export const favoriteAdd = favorite => {
  console.log("ADDACTION", favorite);
  return { type: "ADD_FAVORITES", favorite };
};

export const favoriteDelete = favoriteDelete => {
  console.log("DELETEACTION", favoriteDelete);
  return { type: "DELETE_FAVORITES", favoriteDelete };
};
