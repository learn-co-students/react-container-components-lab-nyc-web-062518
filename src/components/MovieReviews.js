// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  return (
    <div className='review-list'>
      {props.reviews.map((review, index) => {
        return (
          <div className='review' key={index}>
            <h3>{review.display_title}</h3>
            <h4><a href={review.link.url}>{review.headline}</a></h4>
            <p>Summary: {review.summary_short}</p>
            {/* <img src={review.multimedia.src} alt={review.link.suggested_link_text} style={{width:`${review.multimedia.width}`, height:`${review.multimedia.height}`}}></img> */}
            <br></br>
          </div>
        )
      })
    }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
