import React from 'react'


const Review = (props) => {
  // console.log(review);
  return(
    <div>
      <h4><a href={props.review.link.url}>{props.review.headline}</a></h4>
      <h6>By: {props.review.byline}</h6>
      <p>{props.review.summary_short}</p>
      <hr/>
    </div>
  )
}

function MovieReviews(props) {

  return(
    <ul className="review-list">
      {props.reviews.map((review, index) => <Review className="review" review={review} key={index}/>)}
    </ul>
      )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
