import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews:[],
      searchTerm:''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(URL+this.state.searchTerm)
      .then(r=>r.json())
      .then(data=>this.setState({reviews: data.results}))
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
