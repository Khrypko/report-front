import React from "react";

import "./search.css";
import ApiCategories from 'services/Categories';
import SearchItem from "./SearchItem";

class Search extends React.Component {
  _apiCategories = new ApiCategories();
  state = {
    input: "",
    searchResults: []
  };

  renderResults = () => {
    const { searchResults, input } = this.state;
    if (!input) return;
    return searchResults.map(data => {
      return <SearchItem data={data} key={Math.random()} />;
    });
  };

  getInput = e => {
      this.setState({input : e.target.value});
      this._apiCategories.getCategoriesStartsWith(this.state.input)
          .then(res => this.setState({ searchResults: res}))
          .catch(err => console.log('error---------------------------------', err))
  };

  render() {
      console.log(this.state.searchResults);
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
