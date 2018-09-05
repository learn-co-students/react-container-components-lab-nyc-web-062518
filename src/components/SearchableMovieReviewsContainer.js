import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor (props) {
    super (props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    let search = this.state.searchTerm
    let searchUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<${search}>`
    fetch(searchUrl).then(r => r.json()).then(data => this.setState({reviews: data.results}))
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <h1>Searchable Movie Reviews</h1>
        <form action="" onSubmit={this.handleSearch}>
          <label htmlFor="">Search:</label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          <input type="submit" value='Search Reviews'/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
