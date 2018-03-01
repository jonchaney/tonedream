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
    this.props.toggleSearch();
    this.props.history.push(`/${url}`);
  }

  searchResults() {
    console.log(this.props.results);
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
      let results = [];
      let type = "";
      this.props.results.forEach((result, idx) => {
        let url = `artists/${result.id}`;
        if (result.type !== 'Artist') {
          url = `albums/${result.id}`;
        } 
        if (type !== result.type) {
          results.push(<article className="results-text" key={idx+100}>{`${result.type}s`}</article>);
          type = result.type;
        }
        results.push(
          <li key={idx} onClick={() => this.redirect(url, result.id)}>
                <div>
                <img src={result.image} />
              </div>
                <div className="results-text">
                  <p>{result.name}</p>
                </div>
            </li>
        );
      })
      return (
        <ul className="search-results">
          {results}
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
                 placeHolder="Search"
                 autoFocus={true}>
          </Input>
        </form>
        {this.searchResults()}
      </div>
    );
  }
}

export default Search;