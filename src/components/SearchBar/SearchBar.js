import React, { Component } from "react";
import { connect } from "react-redux";
import searchAction from "./../../actions/searchAction";
import "./SearchBar.css";
import SearchIcon from "./../../Assets/Icons/search.PNG";
class SearchBar extends Component {
  state = {
    search: ""
  };

  /*
   * This handles updating the state.search from the form value.
   * IF SPACE KEY IS PRESSED:
   *    IF more than two characters in input element, SET STATE with new value. (SPACE KEY counts as one character)
   *    ELSE only the space key was pressed then sets the state to empty.
   * ELSE:
   *    IF more than one character in the input element, SET STATE with new value. (DELETE triggers event.target.value)
   *    ELSE clear search.
   */
  handleSearch = event => {
    if (event.target.value === " ") {
      if (event.target.value.length > 2) {
        this.setState({ search: event.target.value });
      } else {
        this.setState({ search: "" });
      }
    } else {
      if (event.target.value.length > 0) {
        this.setState({ search: event.target.value });
      } else {
        this.props.search("");
      }
    }
  };

  /*
   * This handles the search feature by handing over what is currently in the state and adding it to the redux store.
   * IF state.search is not > 0, does not perform search.
   */
  handleOnSubmit = event => {
    event.preventDefault();
    if (this.state.search.length > 0) {
      this.props.search(this.state.search);
    }
  };
  render() {
    return (
      <div className="input_container">
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={this.handleSearch}
            value={this.state.search}
          />
          <button>
            <img src={SearchIcon} alt="searchIcon" />
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { search: state };
};

/*
 * This updates the props in this component to have the value in this.state.search to be added to redux store.
 * Params:
 * search -> This is the search value from this.state.search
 */

const mapDispatchToProps = dispatch => {
  return { search: search => dispatch(searchAction(search)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
