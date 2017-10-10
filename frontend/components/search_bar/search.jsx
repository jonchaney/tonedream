import React from 'react';
import { Link } from 'react-router-dom';

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

  componentDidMount() {
    // this.props.clearResults();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ results: newProps.results });
  }

  checkActiveSearch() {
    if (document.getElementsByClassName('search-bar')[0] != document.activeElement) {
      this.props.clearResults();
      this.setState({ value: "" });
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

  searchResults() {
    if (this.props.results.length == 0) {
      return;
    } else if (this.props.results[0] == "nothing found") {  
      return (
        <ul className="search-results">
          <li>
            <div>
              <img src="http://res.cloudinary.com/tonedream/image/upload/v1500576450/settings_os0b9w.png" alt="tonedream"></img>
            </div>
            <div className="results-text">
              <p>Nothing Found!</p>
            </div>
          </li>
        </ul> 
      );
    } else {
      return (
        <ul className="search-results">
          {this.props.results.slice(0,4).map((result, idx) =>
            <Link to={`./${result.id}`} key={idx}>
            <li>
                <div key={idx+10}>
                <img src={result.image} />
              </div>
                <div key={idx+20} className="results-text">
                  <p>{result.name}</p>
                  <p>{result.type}</p>
                </div>
            </li>
              </Link>
          )}
        </ul>   
      );
    }

  }

  render() {
    let autoCompleteStyles = "alt-autocomplete-search";
    let searchWrapperStyles = "alt-search-wrapper";
    let searchbar = "alt-search-bar";
    let placeHolder = "search tonedream";
    if (this.props.location.pathname === '/') {
      autoCompleteStyles = "autocomplete-search";
      searchWrapperStyles = "search-wrapper";
      searchbar = "search-bar";
      placeHolder = "Search for artist, track or album";
    }
    return (
      <div className={searchWrapperStyles}>
        <span className="fa fa-search"></span>
        {this.searchResults()}
        <form className={autoCompleteStyles}>
          <input className={searchbar} 
                 onChange={this.updateSearch} 
                 value={this.state.value} 
                 placeholder={placeHolder}>
          </input>
        </form>
      </div>
    );
  }
}

export default Search;