import React from 'react'
import { useStateContext } from '../../HBOProvider';



const Account = (props) => {
  const globalState = useStateContext();

  // const loopComp = (comp, digit) => {
  //   const thumbnails = [];
  //   for (let i = 0; i < digit; i++) {
  //     thumbnails.push(comp)
  //   }
  //   return thumbnails;
  // }


  return (
    <div
      className={`account ${globalState.accountModalOpen ? 'account--active' : ''}`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <img src="https://m.media-amazon.com/images/M/MV5BM2M2NDIzOTItZDA1Yy00M2Q4LTk3ZjctZjZmZjUyZWMxM2YyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="/" className="active">My List</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Account;
