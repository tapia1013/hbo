import React from 'react'

const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  return (
    <div className="foryou-list">
      <h3 className='foryou-list__title'>For You</h3>
      <div className='foryou-list__thumbnails'>
        {
          loopComp((<div className="foryou-list__thumbnail">
            <img src="https://m.media-amazon.com/images/M/MV5BM2M2NDIzOTItZDA1Yy00M2Q4LTk3ZjctZjZmZjUyZWMxM2YyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" />
            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>), 10)
        }
      </div>
    </div>
  )
}

export default ForYouList
