import React from 'react'

export const GifGridItem = ({img}) => {
  return (
    <div className="col-md-4 mb-5">
        <div className="card animate__animated animate__bounce animate__slideInRight">
            <div className="card-header">
                {img.title}
            </div>
            <div className="card-body">
                <img src={img.url} alt="img" className="img-fluid"></img>
            </div>
        </div>
    </div>
  )
}
