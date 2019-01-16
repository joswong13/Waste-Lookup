export const AddWasteListToStore = wasteList => {
  return { type: "ADD_WASTE_LIST", wasteList };
};

export const ChangeWasteItemFavStatus = wasteItem => {
  return { type: "CHANGE_ITEM_FAV_STATUS", wasteItem };
};
