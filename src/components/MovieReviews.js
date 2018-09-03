import React from 'react'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map((review, idx) => {
        return <li key={idx}>{review.summary_short}</li>
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
