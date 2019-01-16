import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { AddWasteListToStore } from "./../../actions/wasteListAction";
import SearchBar from "./../SearchBar/SearchBar";
class SearchHolder extends Component {
  state = {
    loading: true,
    error: null
  };

  /*
   * Uses axios to get the waste list. Then iterate through each item to add in an ID (called shopifyID) because
   * not every item in the original data has an ID. In each item also add a favoritedInSearch to manage
   * the state of how each item should be displayed.
   */
  componentDidMount() {
    axios
      .get(
        "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
      )
      .then(
        res => {
          let tempId = 0;
          let tempDataRes = res.data.map(eachItem => {
            return {
              ...eachItem,
              shopifyID: tempId++,
              favoritedInSearch: false
            };
          });
          this.setState({ loading: false });

          this.props.AddWasteListToStore(tempDataRes);
        },
        err => {
          this.setState({ error: "Error" });
        }
      );
  }

  //Loads the search bar once axios gathers all the data. Else it loads the wait and an error if it experiences an error.
  ifLoading = () => {
    if (this.state.loading) {
      return (
        <div>
          <h4>LOADING WASTE LIST</h4>
          <h4>{this.state.error}</h4>
        </div>
      );
    } else {
      return <SearchBar />;
    }
  };
  render() {
    return <div>{this.ifLoading()}</div>;
  }
}
//Action to load waste list in JSON to redux store.
const mapDispatchToProps = dispatch => {
  return {
    AddWasteListToStore: wasteList => dispatch(AddWasteListToStore(wasteList))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchHolder);
