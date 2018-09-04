import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&searchTerm=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(json => this.setState({...this.state, reviews: json.results}, () => console.log(this.state.reviews)))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} />
          <button type='submit'>Submit</button>
        </form>
        <h2>Search Results</h2>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
