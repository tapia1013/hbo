import Head from 'next/head';
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/Login';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../components/UI/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';
import Placeholders from '../components/UI/Placeholders/Placeholders';




export default function Home() {
  // this allows us to start using the context in HBOProvider
  const globalState = useStateContext();
  // we have to instantiate useRouter
  const router = useRouter();

  useEffect(() => {

  }, []);


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/G9CzaN3WyKs?autoplay=1&loop=1&start=16"
        title='Orange'
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl="/movie/66958"
        type="front"
      />
      <LazyLoad offset={-400} placeholder={<Placeholders title="Movies" type="large-v" />}>
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Series" type="small-h" />}>
        <MediaRow
          title="Series"
          mediaType="series"
          type="small-h"
          endpoint="discover/tv?primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Action" type="small-v" />}>
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Horror" type="small-v" />}>
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Animation" type="large-h" />}>
        <MediaRow
          title="Animation"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Sci-Fi" type="small-v" />}>
        <MediaRow
          title="Sci-Fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}

