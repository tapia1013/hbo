import React, { useEffect } from 'react';
import { useStateContext } from '../../HBOProvider';


const SearchModal = (props) => {
  const globalState = useStateContext();


  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }
    return thumbnails;
  };



  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [globalState.searchOpen])



  return (
    <div className={`search-modal ${globalState.searchOpen ? 'search-modal--active' : ''}`}>
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="search for a title"
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}
        >
          <i className="fas fa-times" />
        </div>
      </div>

      <h3 className="search-modal__title">
        Popular Searches
      </h3>

      <div className='search-modal__thumbnails'>
        <div className="search-modal__thumbnail">
          <img src="https://i2.wp.com/mhmanga.com/wp-content/uploads/2021/03/The_Great_Mage_Returns_After_4000_Years_1.jpg.990x990_q95.jpg?fit=467%2C630&ssl=1" />
          <div className="search-modal__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal;
