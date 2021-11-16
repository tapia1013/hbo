import React from 'react'

const CastInfo = (props) => {
  return (
    <div className="cast-info">
      <div className="cast-info__group-title">
        Cast & Crew
      </div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>James</li>
          <li>Nye Rod</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Billy</li>
          <li>Nye Rod</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Zoey</li>
          <li>Nye Rod</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Cookie</li>
          <li>Nye Rod</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Pedro</li>
          <li>Nye Rod</li>
        </ul>
      </div>




      <div className="cast-info__group-title">
        Director
      </div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>James</li>
          <li>Nye Rod</li>
        </ul>
      </div>
    </div>
  )
}

export default CastInfo;
