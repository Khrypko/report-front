import React from "react";

import "./search.css";

import SearchItem from "./SearchItem";

class Search extends React.Component {
  state = {
    input: "",
    searchResults: [
      { id: 878637853783, title: "market buy", childs: [] },
      { id: 87863623647853783, title: "market1 buy", childs: [] },
      { id: 878637858459463783, title: "market25 buy", childs: [] },
      { id: 878637851535364623783, title: "market26 buy", childs: [] },
      { id: 8786378535327830098783, title: "market4 buy", childs: [] }
    ]
  };

  renderResults = () => {
    const { searchResults, input } = this.state;
    if (!input) return;
    return searchResults.map(data => {
      return data.title.match(input) ? (
        <SearchItem data={data} key={Math.random()} />
      ) : null;
    });
  };

  getInput = e => this.setState({ input: e.target.value });

  render() {
    return (
      <div className="search-wrapper">
        <div className="search">
          <input
            onChange={this.getInput}
            value={this.state.input}
            type="text"
            className="search-input form-control"
            placeholder="Search for items..."
          />
        </div>
        <div className="search-results">{this.renderResults()}</div>
      </div>
    );
  }
}

export default Search;
