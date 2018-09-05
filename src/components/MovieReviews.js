import React from 'react'

const MovieReviews = (props) => {

  let mappedReviews = props.reviews.map((review, index) => {
    return <div className="review" key={index}>
      {review.display_title}
    </div>})

  return (
    <div className="review-list">
      {mappedReviews}
    </div>
  )

}

export default MovieReviews
