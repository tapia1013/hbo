import Head from 'next/head'
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
// import PosterView from '../components/UI/PosterView/PosterView';
import CastInfo from '../components/UI/CastInfo/CastInfo';
import AuthCheck from '../components/AuthCheck';
import MediaRow from '../components/UI/MediaRow/MediaRow';



export default function Movie() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  )
}

