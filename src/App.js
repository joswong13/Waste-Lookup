import React, { Component } from "react";
import "./App.css";

//Component for top gradient
import TopColorGradiant from "./components/TopColorGradient/TopColorGradiant";
//Component for holding the search bar
import SearchHolder from "./components/SearchHolder/SearchHolder";
//Component for holding the search list
import SearchList from "./components/SearchList/SearchList";
//Component for holding the favorites list
import FavoritesList from "./components/FavouriteSection/FavoritesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopColorGradiant />
        <SearchHolder />
        <SearchList />
        <FavoritesList />
      </div>
    );
  }
}

export default App;
