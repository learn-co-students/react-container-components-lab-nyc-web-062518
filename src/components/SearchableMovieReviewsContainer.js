import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, searchTerm: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm).then(resp => resp.json()).then(data => this.setState({...this.state, reviews: data.results}))
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search for a Review</h1>
        <form onSubmit={this.handleSearch}>
          <input onChange={this.handleChange} value={this.state.searchTerm}></input>
          <input type="submit" value="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
