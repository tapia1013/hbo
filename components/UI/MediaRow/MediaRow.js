import React, { useState, useEffect } from 'react'
import axios from 'axios';




const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([])

  // let movies = [];


  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2021&api_key=c1b0e735ad3ff470f44fa29c9a1e6189')
      .then(function (response) {
        // list of movies from api
        setMoviesData(response.data.results)
        setLoadingData(false);

        console.log('Success Response For ' + props.title);
        console.log(response);
      })
      .catch(function (error) {
        console.log('Error Response For ' + props.title);
        console.log(error);
      })
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }
    return thumbnails;
  }

  // showing the thumbnails
  const showThumbnails = () => {
    return loadingData
      ? loopComp((<Skeleton />), 10)
      : movies.map((movie) => {
        return <Thumbnail movieData={movie} />
      })
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


const Thumbnail = (props) => {
  return (
    <div className="media-row__thumbnail">
      <img src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path} `} />
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
