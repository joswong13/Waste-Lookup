import React, { Component } from "react";
import { connect } from "react-redux";
import { favoriteDelete } from "./../../actions/favoritesAction";

import { ChangeWasteItemFavStatus } from "./../../actions/wasteListAction";
import SearchItem from "./../SearchList/SearchItem";
import "./FavoriteList.css";

class FavoritesList extends Component {
  /*
   * Renders the DOM for each item in the Favorites Array in the redux store.
   * The button in the favorite list is only mapped to the favoriteDelete action from redux.
   */
  handleFavoriteList = () => {
    let favoriteList = this.props.favorites.favorites;

    if (favoriteList.length > 0) {
      return (
        <div className="favorite_container">
          <h1>Favourites</h1>
          {favoriteList.map(favorites => (
            <SearchItem
              wasteArray={favorites}
              key={favorites.shopifyID}
              favButton={this.handleDeleteFavorite}
            />
          ))}
        </div>
      );
    } else {
      return <div> </div>;
    }
  };

  handleDeleteFavorite = item => {
    this.props.favoriteDelete(item);
    this.props.ChangeWasteItemFavStatus(item);
  };

  render() {
    return <div>{this.handleFavoriteList()}</div>;
  }
}

/*
Allowing this component to see the redux store
*/
const mapStateToProps = state => {
  return { favorites: state.favorites };
};

const mapDispatchToProps = dispatch => {
  return {
    favoriteDelete: deleteItem => dispatch(favoriteDelete(deleteItem)),
    ChangeWasteItemFavStatus: unFavItem =>
      dispatch(ChangeWasteItemFavStatus(unFavItem))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesList);
