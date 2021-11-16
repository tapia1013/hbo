import React from 'react'

const PosterView = (props) => {

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }
    return thumbnails;
  }

  return (
    <div className="poster-view">
      <h3 className='poster-view__title'>Movies</h3>
      <div className='poster-view__thumbnails'>
        {
          loopComp((<div className="poster-view__thumbnail">
            <img src="https://m.media-amazon.com/images/M/MV5BZWY4NjFjMzktZTg0Mi00YWFiLWFhYjgtNzljMzQ2MmFmZDFiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" />
            <div className="poster-view__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>), 10)
        }
      </div>
    </div>
  )
}

export default PosterView;
