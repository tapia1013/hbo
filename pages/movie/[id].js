import Head from 'next/head'
import { useEffect, useState } from 'react';
import AuthCheck from '../../components/AuthCheck';
import MainLayout from '../../components/Layouts/MainLayout';
import CastInfo from '../../components/UI/CastInfo/CastInfo';
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../../components/UI/MediaRow/MediaRow';
import { useRouter } from 'next/router';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import Placeholders from '../../components/UI/Placeholders/Placeholders';



export default function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false)

  // const { id } = router.query;
  console.log(props);



  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
      .then(function (response) {
        setMediaData(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [mediaData]); // if we dont enter mediaData when we click on a new movie it wont show but the url will change


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={mediaData.title}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl="/movies/id"
        type="single"
      />

      <LazyLoad offset={-400} placeholder={<Placeholders title="Movies" type="large-v" />}>
        <MediaRow
          title="Similar To This"
          type="small-v"
          endpoint={`movie/${props.query.id}/similar?`}
        />
      </LazyLoad>

      <CastInfo mediaId={props.query.id} />
    </MainLayout>
  )
}



// for getting the movie id cause its returning undefined first
export async function getServerSideProps(context) {
  return {
    props: { query: context.query }
  }
}






