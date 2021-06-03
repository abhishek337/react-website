import React from 'react'

const Card = (props) => {
    return (
        <div>
        <div className="card mb-1">
         <div className="row g-0">
          <div className="col-md-4">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          </div>
          <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title font-weight-bold mt-4">{props.title}</h5>
            <p className="card-text mt-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Card
