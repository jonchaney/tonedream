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

  render() {
    return (
      <div className="search-wrapper">
              <ul className="search-results">
                {this.props.results.map((result, idx) =>
                  <li key={idx}>
                    <Link to={`./${result.id}`}>{result.type} | {result.name}</Link>
                  </li>
                )}
              </ul>   
            <form className="autocomplete-search">
              <input className="search-bar" onChange={this.updateSearch} value={this.state.value} placeholder="Search for artist, track or album"></input>
            </form>
      </div>
    );
  }
}

export default Search;