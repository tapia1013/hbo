import React from 'react';
import { useStateContext } from '../../HBOProvider';


const FeaturedMedia = (props) => {
  const globalState = useStateContext();


  return (
    <div
      className={`featured-media`}
      onClick={() => globalState.setSideNavOpenAction(false) || globalState.setAccountModalOpenAction(!true)}
    >
      <iframe
        className="featured-media__video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/G9CzaN3WyKs?autoplay=1&loop=1&start=16"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">Your Lie In April</div>
          <div className="featured-media__playing">Now Playing</div>
          <div className="featured-media__location">In theaters and on HBO MAX. Streaming throughout May 23.</div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn">
              <i className="fas fa-play" />
            </div>
            <div className="featured-media__info-btn">
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia
