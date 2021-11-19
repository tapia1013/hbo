import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../HBOProvider';



const SearchModal = (props) => {
  const globalState = useStateContext();

  const [popData, setPopData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState('');


  // const loopComp = (comp, digit) => {
  //   let thumbnails = [];
  //   for (let i = 0; i < digit; i++) {
  //     thumbnails.push(comp)
  //   }
  //   return thumbnails;
  // };



  // Initial Search for populate data
  useEffect(async () => {
    try {

      let popData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=c1b0e735ad3ff470f44fa29c9a1e6189`
      );

      setPopData(popData.data.results.filter((item, i) => i < 14));

      setShowResults(false);
      console.log('popData', popData.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [])



  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [globalState.searchOpen]);



  // handle input
  const handleInput = async (e) => {
    try {
      // get input search value text
      setText(e.target.value);

      // handle the actual search
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=c1b0e735ad3ff470f44fa29c9a1e6189`
      );
      // set search into state
      setSearchData(searchData.data.results.filter((item, i) => item.media_type === 'tv' || item.media_type === 'movie')); /***  VIDEO29 COMPLETE SEARCH @ 13:18 */
      // if everything above comes back good setShowResults to true
      setShowResults(true);
    } catch (error) {

      console.log(error);

    }
  }



  return (
    <div className={`search-modal ${globalState.searchOpen ? 'search-modal--active' : ''}`}>
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="search for a title"
          onChange={handleInput}
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
