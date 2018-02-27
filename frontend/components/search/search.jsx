import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Input from '../presentationals/input.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      show: true
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.searchResults = this.searchResults.bind(this);
    $(window).on("click", this.checkActiveSearch.bind(this));
  }

  componentDidUnMount() {
    this.props.clearAlbums();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ results: newProps.results });
  }

  checkActiveSearch() {
    if (this.props.results[0]) {
      this.props.clearResults();
    }
  }

  updateSearch(e) {
    if (e.currentTarget.value !== "") {
      this.props.search(e.currentTarget.value);
    } else {
      this.props.clearResults();
      this.setState({ results: [] });
    }
    this.setState({ value: e.currentTarget.value });
  }

  redirect(url, id) {
    this.props.history.push(`/${url}`);
    // i don't know why its not redirecting automatically, quick fix.
    if (this.props.artist.id !== id) {
      location.reload();
    }
  }

  searchResults() {
    if (this.props.results.length == 0) {
      return;
    } else if (this.props.results[0] == "nothing found") {  
      return (
        <ul className="search-results">
          <li>
            <div className="results-text-nothing">
              <p>Nothing Found</p>
            </div>
          </li>
        </ul> 
      );
    } else {
      return (
        <ul className="search-results">
          {this.props.results.map((result, idx) => {
            let url = `artists/${result.id}`;
            if (result.type !== 'Artist') {
              url = `albums/${result.id}`;
            } 
            return (
              <li key={idx} onClick={() => this.redirect(url, result.id)}>
                    <div key={idx+10}>
                    <img src={result.image} />
                  </div>
                    <div key={idx+20} className="results-text">
                      <p>{result.name}</p>
                      <p>{result.type}</p>
                    </div>
                </li>
            );
          })}
        </ul>   
      );
    }

  }

  render() {

    return (
      <div className="search-container">
        <form>
          <Input onChange={this.updateSearch} 
                 value={this.state.value} 
                 placeholder="Search">
          </Input>
        </form>
        {this.searchResults()}
      </div>
    );
  }
}

export default Search;