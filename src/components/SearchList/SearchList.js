import React, { Component } from "react";
//Search item Component
import SearchItem from "./SearchItem";
//Redux store connect
import { connect } from "react-redux";
//Actions for redux store
import { ChangeWasteItemFavStatus } from "./../../actions/wasteListAction";
import { favoriteAdd } from "./../../actions/favoritesAction";
import { favoriteDelete } from "./../../actions/favoritesAction";

class SearchList extends Component {
  handleLowerCase = mixedCase => {
    return mixedCase.toLowerCase();
  };

  //Search each waste entry that has the keywords matching the search string
  //Returns: A list of waste that had a keyword containing the search string
  filterThroughWastes = filter => {
    let filteredWasteReturn = this.props.wastes.filter(items => {
      let wasteKeywords = items.keywords.toLowerCase();

      return wasteKeywords.includes(filter);
    });

    return filteredWasteReturn;
  };
  /*
   * If the search term sent in from the store (from the searchbar) if not undefined or has length of 0,
   * then this function will make all the search terms lowercase and then search through the keywords of
   * list of waste from the JSON provided by Toronto Waste.
   */
  filterThroughKeywords = () => {
    if (
      this.props.search.length !== undefined &&
      this.props.search.length > 0
    ) {
      //Lowercase the search string
      let lowerCaseSearch = this.handleLowerCase(this.props.search).trim();

      let filteredWaste = this.filterThroughWastes(lowerCaseSearch);

      return (
        <div>
          {filteredWaste.map(waste => (
            <SearchItem
              wasteArray={waste}
              key={waste.shopifyID}
              favButton={this.handleFavButtonClick}
            />
          ))}
        </div>
      );
    } else {
      //If empty, render an empty div
      return <div />;
    }
  };

  /*
   * Checks the status of the item being clicked on.
   *
   * If the waste item has been favorited via the favoritedInSearch property of the item,
   * then we will send the item to be deleted from the favorited list from redux store.
   *
   * If the waste item has not been favorited, it will add the item to the favorited list in the redux store.
   *
   * Afterwards, it will change the property of favoritedInSearch in the redux store to be !favoritedInSearch.
   *
   */
  handleFavButtonClick = wasteItemFav => {
    if (wasteItemFav.favoritedInSearch) {
      this.props.favoriteDelete(wasteItemFav);
    } else {
      this.props.favoriteAdd(wasteItemFav);
    }
    this.props.ChangeWasteItemFavStatus(wasteItemFav);
  };

  render() {
    return <div>{this.filterThroughKeywords()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    search: state.search.search,
    favorites: state.favorites.favorites,
    wastes: state.wastes.wastes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    favoriteAdd: item => dispatch(favoriteAdd(item)),
    favoriteDelete: unFavItem => dispatch(favoriteDelete(unFavItem)),
    ChangeWasteItemFavStatus: wasteItem =>
      dispatch(ChangeWasteItemFavStatus(wasteItem))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
