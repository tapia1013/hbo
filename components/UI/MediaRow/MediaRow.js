import React, { useState, useEffect } from 'react'




const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true)

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }
    return thumbnails;
  }

  // showing the thumbnails
  const showThumbnails = () => {
    setTimeout(() => setLoadingData(false), 4000);
    return loadingData
      ? loopComp((<Skeleton />), 10)
      : loopComp((<Thumbnail />), 10)
  }

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className='media-row__title'>{props.title}</h3>
      <div className='media-row__thumbnails'>

        {showThumbnails()}

        {/* {
          loopComp((<Thumbnail />), 10)
        } */}
      </div>
    </div>
  )
}


const Thumbnail = () => {
  return (
    <div className="media-row__thumbnail">
      <img src="https://i2.wp.com/mhmanga.com/wp-content/uploads/2021/03/The_Great_Mage_Returns_After_4000_Years_1.jpg.990x990_q95.jpg?fit=467%2C630&ssl=1" />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  )
}


const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  )
}



export default MediaRow;
